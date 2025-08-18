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

class WindowsIcon extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="windows">
        <div class="windows__part1"></div>
        <div class="windows__part"></div>
        <div class="windows__part"></div>
        <div class="windows__part4"></div>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .windows {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gris-template-rows: repeat(2, 1fr);
          gap: 0.0625rem;

          width: 1.6rem;
          aspect-ratio: 1/1;

          background-color: transparent;
          filter: brightness(1.25);

          .windows__part1 {
            background-image: linear-gradient(125deg, var(--windows-light-blue, #6DD4FF), var(--windows-blue, #56c1f6));
          }

          .windows__part {
            background-image: linear-gradient(125deg, var(--windows-blue, #56c1f6), var(--windows-dark-blue, #057fd9));
          }

          .windows__part4 {
            background-color: var(--windows-dark-blue, #057fd9);
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

customElements.define('windows-icon', WindowsIcon)
