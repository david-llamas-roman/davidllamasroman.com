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
  constructor() {
    super()
    this.apps = []
    this.focusedIndex = -1
    this.spacePressed = false
    this.appRows = new Map()
    this._onKeyDown = null
    this._onKeyUp = null
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="canvas"></article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .canvas {
          position: relative;

          width: var(--max-dvw, 100dvw);
          height: var(--max-percentage, 100%);
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
  }

  #isTyping() {
    const activeElement = document.activeElement

    return (
      activeElement &&
      (activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.isContentEditable)
    )
  }

  #openAppByTagName(tagName) {
    const app = document.createElement(tagName)

    const canvas = this.shadowRoot.querySelector('.canvas')
    canvas.appendChild(app)

    this.apps.push(app)
    this.#focusApp(this.apps.length - 1)
    this.#retile()
  }

  #closeApp(index) {
    const app = this.apps[index]

    if (!app) return

    app.remove()
    this.apps.splice(index, 1)
    this.focusedIndex = Math.min(this.apps.length - 1, index)
    this.#retile()
  }

  #focusApp(index) {
    if (index < 0 || index >= this.apps.length) return

    this.focusedIndex = index
    this.apps.forEach((app, i) => {
      if (typeof app.setFocused === 'function') {
        app.setFocused(i === index)
      }

      app.style.zIndex = i === index ? '2' : '1'
    })
  }

  #moveAppLeft() {
    if (this.focusedIndex <= 0) return
    ;[this.apps[this.focusedIndex - 1], this.apps[this.focusedIndex]] = [
      this.apps[this.focusedIndex],
      this.apps[this.focusedIndex - 1],
    ]

    this.focusedIndex--

    const canvas = this.shadowRoot.querySelector('.canvas')

    this.apps.forEach((element) => canvas.appendChild(element))
    this.#retile()
    this.#focusApp(this.focusedIndex)
  }

  #moveAppRight() {
    if (this.focusedIndex >= this.apps.length - 1) return
    ;[this.apps[this.focusedIndex + 1], this.apps[this.focusedIndex]] = [
      this.apps[this.focusedIndex],
      this.apps[this.focusedIndex + 1],
    ]

    this.focusedIndex++

    const canvas = this.shadowRoot.querySelector('.canvas')

    this.apps.forEach((element) => canvas.appendChild(element))
    this.#retile()
    this.#focusApp(this.focusedIndex)
  }

  #retile() {
    const n = this.apps.length
    if (n === 0) return

    const paddingX = 0.5
    const paddingTop = 0.5
    const paddingBottom = 0.25
    const gap = 0.25
    const totalGap = gap * (n - 1)

    const width = (100 - paddingX * 2 - totalGap) / n
    const height = 100 - paddingTop - paddingBottom

    this.apps.forEach((app, i) => {
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

  #initShortcuts() {
    const shortcuts = {
      // open terminal
      'Space+Enter': () => this.#openAppByTagName('terminal-emulator'),
      // open browser
      'Space+KeyB': () => this.#openAppByTagName('web-browser'),
      // open visual studio code
      'Space+KeyC': () => this.#openAppByTagName('vs-code'),
      // close app
      'Space+F4': () => this.#closeApp(this.focusedIndex),
      // change focus to left
      'Space+ArrowLeft': () => this.#focusApp(this.focusedIndex - 1),
      // change focus to right
      'Space+ArrowRight': () => this.#focusApp(this.focusedIndex + 1),
      // move app to left
      'Space+Shift+ArrowLeft': () => this.#moveAppLeft(),
      // move app to right
      'Space+Shift+ArrowRight': () => this.#moveAppRight(),
    }

    this._onKeyDown = (event) => {
      console.log('Tecla presionada:', event.code, 'Combo:', this.spacePressed)

      if (this.#isTyping()) return
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

    document.addEventListener('keydown', this._onKeyDown)
    document.addEventListener('keyup', this._onKeyUp)
  }

  disconnectedCallback() {
    if (this._onKeyDown)
      document.removeEventListener('keydown', this._onKeyDown)
    if (this._onKeyUp) document.removeEventListener('keyup', this._onKeyUp)

    this._onKeyDown = null
    this._onKeyUp = null
  }
}

customElements.define('tiling-window-manager', TilingWM)
