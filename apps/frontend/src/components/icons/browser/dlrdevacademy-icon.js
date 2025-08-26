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

class DlrDevAcademyIcon extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    const isSimplified = this.hasAttribute('simplified')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="dlrdevacademy">
        <${isSimplified ? 'div' : 'p'} class="dlrdevacademy__text">${isSimplified ? '' : 'DlrDA'}</${isSimplified ? 'div' : 'p'}>
      </article>
    `

    return template
  }

  #getStyles() {
    const isSimplified = this.hasAttribute('simplified')

    return `
      <style>
        .dlrdevacademy {
          display: grid;
          place-items: center;

          padding: 0.25rem;

          background-color: var(--dlrdevacademy-dark-blue, #0f0e17);

          border-radius: 4px;

          ${
            isSimplified
              ? `
                width: max(18.5px, 1.125vmax);
                height: max(18.5px, 1.125vmax);
              `
              : ''
          }

          .dlrdevacademy__text {
            ${
              isSimplified
                ? `
                  padding: 0.4rem;

                  background-color: var(--dlrdevacademy-purple, #7c3aed);

                  border-radius: 50%;
                `
                : `
                  color: var(--dlrdevacademy-purple, #7c3aed);

                  font-family: 'Montserrat';
                  font-weight: 900;
                  font-size: max(10px, 0.65vmax);
                `
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

customElements.define('dlrdevacademy-icon', DlrDevAcademyIcon)
