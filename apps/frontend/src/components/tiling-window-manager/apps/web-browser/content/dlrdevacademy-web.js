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
              <input type="search" name="search" id="search" placeholder="${t('search-courses')}" autocomplete="off" />
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
            display: grid;
            grid-template-rows: 1fr auto;
            grid-template-columns: 1fr;

            background-color: var(--dlrdevacademy-purple, #6f2fdc);

            .header__content {
              display: grid;
              grid-template-rows: 1fr;
              grid-template-columns: auto 1fr auto;
              align-items: center;
              gap: 1rem;

              padding: 0 1rem;

              background-color: var(--dlrdevacademy-dark-blue);

              .logo {
                padding: 0.5rem;

                .logo__text {
                  color: var(--dlrdevacademy-purple, #0f0e17);

                  font-weight: 900;
                  font-size: max(40px, 2.5vmax);
                }
              }

              .search__container {
                display: grid;
                grid-template-rows: 1fr;
                grid-template-columns: 1fr;

                background-color: var(--dlrdevacademy-dark-blue);

                border-radius: 8px;
                border: 2px solid var(--dlrdevacademy-purple);

                #search {
                  padding: 0.3rem 0.5rem;

                  color: var(--white, #fff);
                  background-color: transparent;

                  font-size: max(16px, 1vmax);

                  outline: none;
                  border: none;

                  &::placeholder {
                    color: var(--dlrdevacademy-purple);

                    font-weight: 550;
                  }
                }
              }
            }

            .header__navbar {
              display: grid;
              place-items: center;

              .navbar__list {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                list-style: none;

                .list__element {
                  padding: 0.25rem;

                  & button {
                    padding: 0.25rem 0.5rem;

                    background-color: transparent;

                    font-weight: 600;
                    font-size: max(16px, 1vmax);

                    border-radius: 4px;
                    border: none;

                    transition: background-color 0.2s, color 0.2s;

                    cursor: pointer;

                    &:hover {
                      background-color: var(--dlrdevacademy-dark-blue);
                      color: var(--dlrdevacademy-purple);
                    }
                  }
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
