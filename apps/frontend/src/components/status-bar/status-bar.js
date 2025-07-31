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

class statusBar extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
  }

  getTemplate() {
    const template = document.createElement('template')
    const isDesktop = this.hasAttribute('desktop')
    const isMobile = this.hasAttribute('mobile')

    template.innerHTML = `
      ${this.getStyles()}
      ${isDesktop ? '<desktop-status-bar></desktop-status-bar>' : ''}
      ${isMobile ? '<mobile-status-bar></mobile-status-bar>' : ''}
    `
    return template
  }

  getStyles() {
    return `
      <style></style>
    `
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }

  connectedCallback() {
    this.render()
  }
}

customElements.define('status-bar', statusBar)
