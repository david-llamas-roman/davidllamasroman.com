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

class WhatsDev extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="whatsdev">
        <p class="whatsdev__text">W</p>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .whatsdev {
          width: max(18.5px, 1.125vmax);
          height: max(18.5px, 1.125vmax);

          display: grid;
          place-items: center;

          background-color: var(--whatsdev-main-green, #25d366);

          border: 2px solid var(--white, #fff);
          border-radius: 50%;

          .whatsdev__text {
            color: var(--white, #fff);

            font-family: 'Montserrat';
            font-size: max(10px, 0.65vmax);
            font-weight: 700;

            text-shadow: none;
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
  }

  connectedCallback() {
    this.render()
  }
}

customElements.define('whatsdev-icon', WhatsDev)
