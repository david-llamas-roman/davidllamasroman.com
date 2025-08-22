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

import BaseComponent from '../../../base-component.js'

class TwmWosIcon extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="wos">
        <div class="wos__part"></div>
        <div class="wos__part"></div>
        <div class="wos__part"></div>
        <div class="wos__part"></div>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .wos {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gris-template-rows: repeat(2, 1fr);
          gap: 0.0423rem;

          width: max(16px, 0.75vmax);
          aspect-ratio: 1/1;

          background-color: transparent;

          transform: perspective(20px) rotateY(-15deg);

          .wos__part {
            border-radius: 1.5px;

            background-color: var(--light-blue, #7080b1);
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

customElements.define('twm-wos-icon', TwmWosIcon)
