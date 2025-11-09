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

class AdditionIcon extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="addition">
        <p class="addition__text">+</p>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .addition {
          position: relative;

          display: grid;
          place-items: center;

          width: max(17px, 1.05vmax);
          height: max(16px, 1vmax);

          .addition__text {
            position: absolute;

            color: var(--light-grey-4, rgba(255, 255, 255, 0.78));

            font-family: 'Open Sans';
            font-size: max(20px, 1.25vmax);
            font-weight: 600;

            text-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);
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

customElements.define('addition-icon', AdditionIcon)
