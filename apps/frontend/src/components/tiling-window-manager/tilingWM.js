/*
 * This file is part of davidllamasroman.com.
 *
 * davidllamasroman.com is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3 of the License only.
 *
 * davidllamasroman.com is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with davidllamasroman.com. If not, see <https://www.gnu.org/licenses/gpl-3.0.en.html>.
 *
 * Copyright (C) 2025 David Llamas Román
 */

'use strict'

import BaseComponent from '../base-component.js'

class TilingWM extends BaseComponent {
  static INITIAL_APPS = {
    'about-me': [{ tag: 'web-browser', attributes: { creatidevpedia: '' } }],
    projects: [
      { tag: 'terminal-emulator', attributes: { projects: '' } },
      { tag: 'code-editor', attributes: { projects: '' } },
    ],
    experience: [{ tag: 'web-browser', attributes: {} }],
    certifications: [{ tag: 'web-browser', attributes: {} }],
    blog: [{ tag: 'web-browser', attributes: {} }],
    academy: [{ tag: 'web-browser', attributes: { dlrdevacademy: '' } }],
    contact: [{ tag: 'web-browser', attributes: {} }],
  }

  constructor() {
    super()

    this.workspaces = new Map()
    this.activeWorkspaceId = null
    this.workspaceOrder = Object.keys(this.constructor.INITIAL_APPS)

    this._onKeyDown = null
    this._onKeyUp = null
    this._onWorkspaceSwitch = null
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="canvases"></article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .canvases {
          position: relative;

          width: var(--max-dvw, 100dvw);
          height: var(--max-percentage, 100%);
        }

        .canvas {
          position: absolute;
          inset: 0;

          width: var(--max-percentage, 100%);
          height: var(--max-percentage, 100%);

          display: none;
        }

        .canvas.active {
          display: block;
        }
      </style>
    `
  }

  render() {
    const sheets = this.shadowRoot.adoptedStyleSheets

    this.shadowRoot.replaceChildren()

    this.shadowRoot.adoptedStyleSheets = sheets

    this.shadowRoot.appendChild(this.#getTemplate().content.cloneNode(true))
  }

  connectedCallback() {
    this.render()
    this.#initShortcuts()

    this._onWorkspaceSwitch = (event) => {
      const id = event?.detail?.id
      if (id) this.#switchWorkspace(id)
    }

    window.addEventListener('workspace:switch', this._onWorkspaceSwitch)
  }

  disconnectedCallback() {
    if (this._onKeyDown)
      document.removeEventListener('keydown', this._onKeyDown)
    if (this._onKeyUp) document.removeEventListener('keyup', this._onKeyUp)
    if (this._onWorkspaceSwitch)
      window.removeEventListener('workspace:switch', this._onWorkspaceSwitch)

    this._onKeyDown = null
    this._onKeyUp = null
    this._onWorkspaceSwitch = null
  }

  // workspaces
  #getCanvasesContainer() {
    return this.shadowRoot.querySelector('.canvases')
  }

  #ensureWorkspace(id) {
    if (this.workspaces.has(id)) return this.workspaces.get(id)

    const canvas = document.createElement('article')
    canvas.className = 'canvas'
    canvas.dataset.ws = id
    this.#getCanvasesContainer().appendChild(canvas)

    const state = {
      id,
      canvas,
      apps: [],
      focusedIndex: -1,
      initialized: false,
    }

    this.workspaces.set(id, state)

    return state
  }

  #switchWorkspace(id) {
    const next = this.#ensureWorkspace(id)
    if (this.activeWorkspaceId === id) return

    if (this.activeWorkspaceId && this.workspaces.has(this.activeWorkspaceId)) {
      const prev = this.workspaces.get(this.activeWorkspaceId)
      prev.canvas.classList.remove('active')
    }

    next.canvas.classList.add('active')
    this.activeWorkspaceId = id

    if (!next.initialized) {
      const initial = this.constructor.INITIAL_APPS[id] || []
      initial.forEach((entry) => {
        if (typeof entry === 'string') {
          this.#openAppIn(next, entry)
        } else if (typeof entry === 'object') {
          this.#openAppIn(next, entry.tag, entry.attributes || {})
        }
      })
      next.initialized = true
      this.#retile(next)
    }
  }

  #getActiveState() {
    if (!this.activeWorkspaceId) return null
    return this.workspaces.get(this.activeWorkspaceId) || null
  }

  #openAppIn(state, tagName, attributes = {}) {
    const app = document.createElement(tagName)

    Object.entries(attributes).forEach(([key, value]) => {
      app.setAttribute(key, value)
    })

    app.addEventListener('app:close', () => {
      const index = state.apps.indexOf(app)
      if (index >= 0) this.#closeApp(index)
    })

    state.canvas.appendChild(app)
    state.apps.push(app)

    this.#focusAppIn(state, state.apps.length - 1)
  }

  #openAppByTagName(tagName, attributes = {}) {
    const state = this.#getActiveState()
    if (!state) return

    this.#openAppIn(state, tagName, attributes)
    this.#retile(state)
  }

  #closeApp(index) {
    const state = this.#getActiveState()
    if (!state) return

    const app = state.apps[index]
    if (!app) return

    app.remove()
    state.apps.splice(index, 1)
    state.focusedIndex = Math.min(state.apps.length - 1, index)
    this.#retile(state)
    this.#focusAppIn(state, state.focusedIndex)
  }

  #focusApp(index) {
    const state = this.#getActiveState()
    if (!state) return

    this.#focusAppIn(state, index)
  }

  #focusAppIn(state, index) {
    if (index < 0 || index >= state.apps.length) return

    state.focusedIndex = index

    state.apps.forEach((app, i) => {
      if (typeof app.setFocused === 'function') {
        app.setFocused(i === index)
      }
      app.style.zIndex = i === index ? '2' : '1'
    })
  }

  #moveAppLeft() {
    const state = this.#getActiveState()
    if (!state || state.focusedIndex <= 0) return

    const i = state?.focusedIndex

    ;[state.apps[i - 1], state.apps[i]] = [state.apps[i], state.apps[i - 1]]

    state.focusedIndex--
    state.apps.forEach((element) => state.canvas.appendChild(element))

    this.#retile(state)
    this.#focusAppIn(state, state.focusedIndex)
  }

  #moveAppRight() {
    const state = this.#getActiveState()
    if (!state || state.focusedIndex >= state.apps.length - 1) return

    const i = state?.focusedIndex

    ;[state.apps[i + 1], state.apps[i]] = [state.apps[i], state.apps[i + 1]]

    state.focusedIndex++
    state.apps.forEach((element) => state.canvas.appendChild(element))

    this.#retile(state)
    this.#focusAppIn(state, state.focusedIndex)
  }

  #retile(state) {
    const n = state.apps.length
    if (n === 0) return

    const paddingX = 0.5
    const paddingTop = 0.5
    const paddingBottom = 0.25
    const gap = 0.25
    const totalGap = gap * (n - 1)

    const width = (100 - paddingX * 2 - totalGap) / n
    const height = 100 - paddingTop - paddingBottom

    state.apps.forEach((app, i) => {
      app.style.removeProperty('width')
      app.style.removeProperty('left')
      app.style.setProperty('--app-width', `${width}%`)
      app.style.setProperty(
        '--app-left',
        `calc(${i * width}% + ${i * gap}rem + ${paddingX}rem)`,
      )
      app.style.setProperty(
        '--app-height',
        `calc(${height}% - ${paddingTop + paddingBottom}rem)`,
      )
      app.style.setProperty('--app-top', `${paddingTop}rem`)
    })
  }

  #isTyping() {
    const isEditable = (element) => {
      if (!element || element === document || element === window) return false

      const tag = (element.tagName || '').toUpperCase()

      if (tag === 'INPUT' || tag === 'TEXTAREA') {
        return !element.disabled && !element.readOnly
      }

      if (element.isContentEditable) return true
      if (
        element.closest &&
        element.closest('[contenteditable=""], [contenteditable="true"]')
      )
        return true
      if (element.getAttribute && element.getAttribute('role') === 'textbox')
        return true

      return false
    }

    const path =
      event && typeof event.composedPath === 'function'
        ? event.composedPath()
        : []

    for (const node of path) {
      if (isEditable(node)) return true

      if (
        node &&
        node.shadowRoot &&
        node.shadowRoot.activeElement &&
        isEditable(node.shadowRoot.activeElement)
      )
        return true
    }

    let element = document.activeElement
    while (element && element.shadowRoot && element.shadowRoot.activeElement) {
      element = element.shadowRoot.activeElement
    }
    if (isEditable(element)) return true

    return false
  }

  #initShortcuts() {
    const shortcuts = {
      // open terminal
      'Space+Enter': () => this.#openAppByTagName('terminal-emulator'),
      // open browser
      'Space+KeyB': () => this.#openAppByTagName('web-browser'),
      // open visual studio code
      'Space+KeyC': () => this.#openAppByTagName('vs-code'),
      // close app
      'Space+F4': () =>
        this.#closeApp(this.#getActiveState()?.focusedIndex ?? -1),
      // change focus to left
      'Space+ArrowLeft': () =>
        this.#focusApp((this.#getActiveState()?.focusedIndex ?? 0) - 1),
      // change focus to right
      'Space+ArrowRight': () =>
        this.#focusApp((this.#getActiveState()?.focusedIndex ?? -1) + 1),
      // move app to left
      'Space+Shift+ArrowLeft': () => this.#moveAppLeft(),
      // move app to right
      'Space+Shift+ArrowRight': () => this.#moveAppRight(),
      // move to workspace on the left
      'Space+KeyA': () => this.#goWorkspaceRelative(-1),
      // move to workspace on the right
      'Space+KeyS': () => this.#goWorkspaceRelative(1),
    }

    this.spacePressed = false

    this._onKeyDown = (event) => {
      console.log('Tecla presionada:', event.code, 'Combo:', this.spacePressed)

      if (event.isComposing) return
      if (event.repeat) return

      if (event.code === 'Space') {
        this.spacePressed = true
        event.preventDefault()
        return
      }

      if (this.spacePressed) {
        let combo = 'Space+'

        if (event.shiftKey) combo += 'Shift+'

        combo += event.code

        const action = shortcuts[combo]
        if (action) {
          event.preventDefault()
          action()
        }
      }
    }

    this._onKeyUp = (event) => {
      if (event.code === 'Space') {
        this.spacePressed = false
      }
    }

    const attachKeyListeners = () => {
      document.addEventListener('keydown', this._onKeyDown)
      document.addEventListener('keyup', this._onKeyUp)
    }

    const detachKeyListeners = () => {
      document.removeEventListener('keydown', this._onKeyDown)
      document.removeEventListener('keyup', this._onKeyUp)
    }

    attachKeyListeners()

    document.addEventListener('focusin', (event) => {
      if (this.#isTyping(event.target)) detachKeyListeners()
    })

    document.addEventListener('focusout', () => {
      setTimeout(() => {
        if (!this.#isTyping()) {
          attachKeyListeners()
        }
      }, 0)
    })
  }

  #goWorkspaceIndex(index) {
    const id = this.workspaceOrder[index]
    if (!id) return

    window.dispatchEvent(
      new CustomEvent('workspace:navigate', { detail: { id } }),
    )

    window.dispatchEvent(
      new CustomEvent('workspace:switch', { detail: { id } }),
    )
  }

  #goWorkspaceRelative(delta) {
    const current = this.activeWorkspaceId
    const i = Math.max(0, this.workspaceOrder.indexOf(current))
    const j =
      (i + delta + this.workspaceOrder.length) % this.workspaceOrder.length
    this.#goWorkspaceIndex(j)
  }
}

customElements.define('tiling-window-manager', TilingWM)
