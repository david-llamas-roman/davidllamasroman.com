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

import BaseComponent from '@/components/base-component.js'

class MainFooter extends BaseComponent {
  constructor() {
    super()

    this.mediaQuery = window.matchMedia('(max-width: 1024px)')
    this._handleResize = () => this.#handleResize()
  }

  #getTemplate() {
    const template = document.createElement('template')
    const isMobile = this.mediaQuery.matches

    template.innerHTML = `
      ${isMobile ? '' : '<wos-taskbar></wos-taskbar>'}
    `

    return template
  }

  render() {
    const sheets = this.shadowRoot.adoptedStyleSheets

    this.shadowRoot.replaceChildren()

    this.shadowRoot.adoptedStyleSheets = sheets

    this.shadowRoot.appendChild(this.#getTemplate().content.cloneNode(true))
  }

  connectedCallback() {
    this.render()
    this.mediaQuery.addEventListener('change', this._handleResize)
  }

  disconnectedCallback() {
    this.mediaQuery.removeEventListener('change', this._handleResize)
  }

  #handleResize() {
    this.render()
  }
}

customElements.define('main-footer', MainFooter)
