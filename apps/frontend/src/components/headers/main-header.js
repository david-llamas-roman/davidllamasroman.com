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

class mainHeader extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    this.mediaQuery = window.matchMedia('(max-width: 1024px)')
    this.handleResize = this.handleResize.bind(this)
  }

  getTemplate() {
    const template = document.createElement('template')
    const isMobile = this.mediaQuery.matches

    template.innerHTML = `
      ${isMobile ? '<mobile-header></mobile-header>' : '<desktop-header></desktop-header>'}
    `

    return template
  }

  render() {
    this.shadowRoot.innerHTML = ''
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }

  connectedCallback() {
    this.render()
    this.mediaQuery.addEventListener('change', this.handleResize)
  }

  disconnectedCallback() {
    this.mediaQuery.removeEventListener('change', this.handleResize)
  }

  handleResize() {
    this.render()
  }
}

customElements.define('main-header', mainHeader)
