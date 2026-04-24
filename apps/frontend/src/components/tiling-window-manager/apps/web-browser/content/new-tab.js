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
import clock from '@/utils/the-system/clock'
import { getHoursMinutes } from '@/utils/formatters.js'

class NewTab extends BaseComponent {
  constructor() {
    super()

    this._onTick = (event) => this.#onTick(event)
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="newtab">
        <p class="newtab__clock">${getHoursMinutes()}<p>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .newtab {
          width: var(--max-percentage, 100%);
          height: var(--max-percentage, 100%);

          padding: 1rem 1.5rem;

          background-color: var(--dark-grey, #232327);

          .newtab__clock {
            color: var(--pantone-red, #da291c);
            
            font-size: max(40px, 2.5vmax);
            font-family: 'Montserrat';
            font-weight: 700;
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
      this.p.textContent = getHoursMinutes(date)
    }
  }
}

customElements.define('new-tab', NewTab)
