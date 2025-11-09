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

class CloseAppIcon extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <button class="x" type="button">X</button>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .x {
          padding: 0.2rem 0.75rem 0.2rem 0.59rem;

          color: var(--white, #fff);
          background-color: transparent;

          font-size: max(16px, 1vmax);
          font-family: 'Open Sans';
          font-weight: 100;

          border: none;
          border-top-right-radius: 6px;

          text-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);

          transform: scaleX(1.5);
          transition: background-color 0.2s;

          cursor: pointer;

          &:hover {
            background-color: var(--close-app-red, #e81123);
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

    const btn = this.shadowRoot.querySelector('.x')
    btn.addEventListener('click', () => {
      this.dispatchEvent(
        new CustomEvent('app:close', { bubbles: true, composed: true }),
      )
    })
  }
}

customElements.define('close-app-icon', CloseAppIcon)
