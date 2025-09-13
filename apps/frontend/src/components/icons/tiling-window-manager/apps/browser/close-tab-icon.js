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

import BaseComponent from '../../../../base-component.js'

class CloseTabIcon extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="x__container">
        <button class="x">
          <p class="x__text">X</p>
        </button>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .x__container {
          padding: 0.25rem;

          cursor: pointer;

          border-radius: 50%;

          transition: background-color 0.2s;

          &:hover {
            background-color: var(--light-grey-2, rgba(255, 255, 255, 0.28));
          }

          .x {
            position: relative;

            display: grid;
            place-items: center;

            width: max(14px, 0.75vmax);
            height: max(14px, 0.75vmax);

            background-color: var(--dark-grey, #232327);

            border-radius: 50%;
            border: none;

            cursor: pointer;

            .x__text {
              position: absolute;

              color: var(--light-grey-4, rgba(255, 255, 255, 0.78));

              font-family: 'Open Sans';
              font-size: max(10px, 0.5vmax);
              font-weight: 600;
            }
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

customElements.define('close-tab-icon', CloseTabIcon)
