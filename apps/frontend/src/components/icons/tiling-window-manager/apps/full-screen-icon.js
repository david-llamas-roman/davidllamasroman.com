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

import BaseComponent from '@/components/base-component'

class FullScreenIcon extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <button class="fullscreen" type="button">
        <article class="square"></article>
      </button>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .fullscreen {
          display: grid;
          place-items: center;

          padding: 0.5rem 0.9rem;

          background-color: transparent;

          border: none;

          text-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);

          transition: background-color 0.2s;

          cursor: pointer;

          &:hover {
            background-color: var(--light-grey-2, rgba(255, 255, 255, 0.28));
          }

          .square {
            padding: 0.35rem;

            border: 1px solid var(--white, #fff);
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

    const btn = this.shadowRoot.querySelector('.fullscreen')
    btn.addEventListener('click', () => {
      this.dispatchEvent(
        new CustomEvent('app:open-static', {
          bubbles: true,
          composed: true,
          detail: { id: this.getAttribute('static-id') },
        }),
      )
    })
  }
}

customElements.define('full-screen-icon', FullScreenIcon)
