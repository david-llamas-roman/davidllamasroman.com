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

import { t } from '../../../../../utils/i18n.js'
import BaseComponent from '../../../../base-component.js'

class DlrDevAcademy extends BaseComponent {
  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="dlrdevacademy">
        <header class="dlrdevacademy__header">
          <article class="header__content">
            <article class="logo">
              <p class="logo__text">DlrDA</p>
            </article>
            <article class="search__container">
              <input type="search" name="search" id="search" />
            </article>
            <button type="button" class="user">
              <img src="" alt="" />
            </button>
          </article>
          <nav class="header__navbar">
            <ul class="navbar__list">
              <li class="list__element"><button type="button">${t('web-development')}</button></li>
            </ul>
          </nav>
        </header>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .dlrdevacademy {
          display: grid;
          grid-template-rows: auto 1fr;
          grid-template-columns: 1fr;

          width: var(--max-percentage, 100%);
          height: var(--max-percentage, 100%);

          background-color: var(--dlrdevacademy-dark-blue, #0f0e17);

          font-family: 'Montserrat';

          border-bottom-right-radius: 10px;

          .dlrdevacademy__header {
            background-color: var(--dlrdevacademy-purple, #6f2fdc);

            .header__content {
              .logo {
                .logo__text {
                  color: var(--dlrdevacademy-dark-blue, #0f0e17);
                }
              }
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

customElements.define('dlrdevacademy-web', DlrDevAcademy)
