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

import BaseComponent from '../../base-component'

class CreatiDevpediaIcon extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="creatidevpedia">
        <p class="creatidevpedia__text">C</p>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .creatidevpedia {
          position: relative;

          width: max(18.5px, 1.125vmax);
          height: max(18.5px, 1.125vmax);

          background-color: var(--creatidevpedia-dark-blue, #121420);

          border-radius: 4px;

          .creatidevpedia__text {
            position: absolute;
            bottom: 1px;
            right: 3px;

            color: var(--creatidevpedia-white, #f8fdfa);

            font-family: 'EB Garamond';
            font-size: max(10px, 0.625vmax);
            font-weight: 600;

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

customElements.define('creatidevpedia-icon', CreatiDevpediaIcon)
