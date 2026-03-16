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

class LinkDevInIcon extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="linkdevin">
        <p class="linkdevin__text">ldn</p>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .linkdevin {
          width: max(18.5px, 1.125vmax);
          height: max(18.5px, 1.125vmax);

          display: grid;
          place-items: center;

          background-color: var(--linkdevin-main-blue, #0a66c2);

          border-radius: 4px;

          .linkdevin__text {
            color: var(--white, #ffff);

            font-family: 'Montserrat';
            font-size: max(10px, 0.625vmax);
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

customElements.define('linkdevin-icon', LinkDevInIcon)
