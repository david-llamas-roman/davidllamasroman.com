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

import clock from '../../../utils/clock.js'
import { getHoursMinutes } from '../../../utils/formatters.js'

class mobileHeader extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
  }

  getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.getStyles()}
      <header class="header">
        <p class="header__text">${getHoursMinutes()}</p>
        <status-bar mobile></status-bar>
      </header>
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

    this.p = this.shadowRoot.querySelector('p')
  }

  connectedCallback() {
    this.render()
    clock.addEventListener('tick', this._onTick)
  }

  disconnectedCallback() {
    clock.removeEventListener('tick', this._onTick)
  }

  _onTick(event) {
    const date = event?.detail ?? new Date()

    if (this.p) {
      this.p.textContent = getHoursMinutes(date)
    }
  }
}

customElements.define('mobile-header', mobileHeader)
