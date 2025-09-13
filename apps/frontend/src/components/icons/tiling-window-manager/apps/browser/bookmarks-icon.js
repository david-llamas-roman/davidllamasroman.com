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

class BookmarksIcon extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <button class="button" type="button">
        <div class="button__part"></div>
        <div class="button__part"></div>
        <div class="button__part"></div>
        <div class="button__part"></div>
      </button>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .button {
          display: grid;
          grid-template-rows: repeat(2, 1fr);
          grid-template-columns: repeat(2, 1fr);
          gap: 0.1rem;

          width: max(34px, 1.5vw);
          aspect-ratio: 1/1;

          padding: 0.5rem;

          background-color: transparent;
          
          border-radius: 8px;
          border: none;

          cursor: pointer;

          transition: background-color 0.2s;

          &:hover {
            background-color: var(--dark-grey-rgba-2, rgba(35, 35, 40, 0.4));
          }

          .button__part {
            border-radius: 3px;
            border: 1.5px solid var(--white, #fff);

            box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);
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

customElements.define('bookmarks-icon', BookmarksIcon)
