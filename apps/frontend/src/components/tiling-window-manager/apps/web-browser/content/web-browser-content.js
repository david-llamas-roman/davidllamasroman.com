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

import { getLanguage } from '../../../../../utils/i18n.js'
import BaseComponent from '../../../../base-component.js'

class WebBrowserContent extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    const isWikipedia = this.hasAttribute('wikipedia')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="browser">
        <header class="browser__header">
          <article class="website__title">
            <p class="title">${isWikipedia ? 'David Llamas Román - Wikipedia' : ''}</p>
          </article>
          <article class="website__url">
            <input type="search" class="url" value="${isWikipedia ? `https://${getLanguage() === 'en' ? 'en' : 'es'}.wikipedia.org/wiki/David_Llamas_Román` : ''}" disabled />
          </article>
        </header>
        <article class="browser__content">
          <aside class="content__aside">
            <nav class="aside__navbar">
              <ul class="navbar__list">
                ${isWikipedia ? '<li class="list__element">DLR - Wikipedia</li>' : ''}
              </ul>
            </nav>
          </aside>
          ${isWikipedia ? '<wikipedia-web></wikipedia-web>' : ''}
        </article>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .browser {
          display: grid;
          grid-template-rows: auto 1fr;

          width: var(--max-percentage, 100%);
          height: var(--max-percentage, 100%);

          .browser__header {
            display: grid;
            grid-template-rows: auto 1fr;
            grid-template-columns: 1fr;

            background-color: var(--light-grey-2, rgba(255, 255, 255, 0.25));

            border-bottom: 1px solid var(--dark-grey-rgba-2, rgba(31, 31, 35, 0.4));

            .website__title {
              padding: 0.35rem 0.75rem;

              background-color: var(--dark-grey, #1f1f23);

              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
              border-bottom: 1px solid var(--dark-grey-rgba-2, rgba(31, 31, 35, 0.4));

              .title {
                color: var(--white, #fff);

                font-size: max(14px, 0.75vmax);

                text-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);
              }
            }

            .website__url {
              display: grid;
              grid-template-rows: 1fr;
              grid-template-columns: 1fr;

              margin: 0.35rem 1rem;
              padding: 0.5rem;

              background-color: var(--dark-grey, #1f1f23);

              border-radius: 10px;

              .url {
                background-color: transparent;
                color: var(--white, #fff);

                font-size: max(14px, 0.75vmax);

                border: none;

                text-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);
              }
            }
          }

          .browser__content {
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: auto 1fr;

            .content__aside {
              padding: 0.75rem 0;

              background-color: var(--light-grey-2, rgba(255, 255, 255, 0.25));

              border-right: 1px solid var(--light-grey-2, rgba(255, 255, 255, 0.25));

              .aside__navbar {
                margin: 0 0.25rem;

                .navbar__list {
                  list-style: none;

                  .list__element {
                    padding: 0.25rem 1.5rem;

                    color: var(--white, #fff);

                    font-size: max(14px, 0.75vmax);

                    border-radius: 8px;

                    text-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);

                    cursor: pointer;

                    transition: background-color 0.2s;

                    &:hover {
                      background-color: var(--light-grey-2);
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

customElements.define('web-browser-content', WebBrowserContent)
