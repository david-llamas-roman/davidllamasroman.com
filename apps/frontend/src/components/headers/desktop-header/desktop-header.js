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
import { getFormattedDate } from '../../../utils/formatters.js'
import BaseComponent from '../../base-component.js'

class DesktopHeader extends BaseComponent {
  constructor() {
    super()

    this._onTick = (event) => this.#onTick(event)
  }

  #getTemplate() {
    const template = document.createElement('template')
    template.innerHTML = `
      ${this.#getStyles()}
      <header class="header">
        <twm-workspaces></twm-workspaces>
        <p class="header__text">${getFormattedDate()}</p>
        <status-bar desktop></status-bar>
      </header>
    `
    return template
  }

  #getStyles() {
    return `
      <style>
        .header {
          position: relative;

          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 0.5rem 1.5rem;

          background-image: linear-gradient(var(--black, #000), var(--dark-blue, #05020e));
          color: var(--white, #fff);

          border-bottom: 1px solid var(--light-grey, rgba(255, 255, 255, 0.06));

          .header__text {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);

            font-size: max(14px, 0.75vmax);
          }
        }
      </style>
    `
  }

  render() {
    const sheets = this.shadowRoot.adoptedStyleSheets

    this.shadowRoot.replaceChildren()

    this.shadowRoot.adoptedStyleSheets = sheets

    this.shadowRoot.appendChild(this.#getTemplate().content.cloneNode(true))

    this.p = this.shadowRoot.querySelector('p')
  }

  connectedCallback() {
    this.render()
    clock.addEventListener('tick', this._onTick)
  }

  disconnectedCallback() {
    clock.removeEventListener('tick', this._onTick)
  }

  #onTick(event) {
    const date = event?.detail ?? new Date()
    if (this.p) {
      this.p.textContent = getFormattedDate(date)
    }
  }
}

customElements.define('desktop-header', DesktopHeader)
