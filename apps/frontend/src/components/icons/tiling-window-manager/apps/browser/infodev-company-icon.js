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

class InfoDevCompanyIcon extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="company">
        <div class="company__buildings">
          <div class="building__1">
            <div class="building__windows">
              <div class="window"></div>
              <div class="window"></div>
              <div class="window"></div>
              <div class="window"></div>
              <div class="window"></div>
              <div class="window"></div>
            </div>
          </div>
          <div class="building__2">
            <div class="window"></div>
            <div class="window"></div>
          </div>
        </div>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .company {
          width: max(50px, 2dvw);
          aspect-ratio: 1/1;

          display: grid;
          place-items: center;

          background-color: var(--light-grey-4, rgba(255, 255, 255, 0.78));

          border-radius: 4px;

          .company__buildings {
            display: flex;
            flex-wrap: nowrap;
            align-items: end;

            .building__1, .building__2 {
              border-radius: 2px;
              border: 2px solid var(--dark-grey-rgba, rgba(35, 35, 40, 0.25));
            }

            .building__1 {
              width: max(20px, 0.75dvw);
              aspect-ratio: 11/18;

              .building__windows {
                display: flex;
                flex-wrap: wrap;
                gap: 0.1rem;
                justify-content: center;
                align-items: center;

                margin-top: 0.2rem;
              }
            }

            .building__2 {
              width: max(10px, 0.5dvw);
              height: max(25px, 0.85dvh);

              border-left: none;
              border-top-right-radius: 1rem;

              .window {
                margin: 0.1rem 0;
                height: max(2.8px, 0.15dvh);

                &:nth-child(1) {
                  margin-top: 0.35rem;
                }
              }
            }

            .window {
              width: max(5px, 0.25dvw);
              height: max(2.5px, 0.15dvh);

              background-color: var(--dark-grey-rgba, rgba(35, 35, 40, 0.25));

              border-radius: 1px;
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

customElements.define('infodev-company-icon', InfoDevCompanyIcon)
