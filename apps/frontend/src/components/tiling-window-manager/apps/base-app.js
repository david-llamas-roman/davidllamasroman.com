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

import BaseComponent from '../../base-component.js'

class BaseApp extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="app">
        <ul>
          <li>
            <full-screen-icon></full-screen-icon>
          </li>
          <li>
            <close-app-icon></close-app-icon>
          </li>
        </ul>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .app {
          position: absolute;
          top: var(--app-top, 0);
          left: var(--app-left, 0);

          display: grid;
          grid-template-rows: 1fr;
          grid-template-columns: 1fr;

          width: var(--app-width, 100%);
          height: var(--app-height, 100%);

          border: 2px solid var(--light-grey-2, rgba(255, 255, 255, 0.28));
          border-radius: 10px;

          overflow: hidden;

          & ul {
            position: absolute;
            top: 0;
            right: 5px;

            display: flex;
            align-items: center;
            gap: 0.5rem;

            list-style: none;

            & li {
              & close-app-icon {
                
              }
            }
          }
        }

        .app.focused {
          border-color: var(--white, #fff);
        }

        .app.no-border {
          border: none;
          border-radius: 0;
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

    const staticId = Array.from(this.attributes)
      .map((attr) => attr.name)
      .find((name) => name !== 'class' && name !== 'id')

    if (staticId) {
      const fullScreenBtn = this.shadowRoot.querySelector('full-screen-icon')
      if (fullScreenBtn) fullScreenBtn.setAttribute('static-id', staticId)
    }
  }

  getAppContainer() {
    return this.shadowRoot.querySelector('.app')
  }

  setFocused(isFocused) {
    this.getAppContainer().classList.toggle('focused', isFocused)
  }

  setNoBorder() {
    this.getAppContainer().classList.add('no-border')
  }
}

export default BaseApp
