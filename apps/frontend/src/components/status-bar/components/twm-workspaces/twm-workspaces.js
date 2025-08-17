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

import { t } from '../../../../utils/i18n.js'
import BaseComponent from '../../../base-component.js'

class TwmWorkspaces extends BaseComponent {
  constructor() {
    super()

    document.addEventListener('languageChanged', () => this.render())
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <nav class="workspaces">
        <twm-windows-icon></twm-windows-icon>
        <ul class="workspaces__list">
          <li class="list__element">
            <a href="#" class="element__link">${t('about-me')}</a>
          </li>
          <li class="list__element">
            <a href="#" class="element__link">${t('projects')}</a>
          </li>
          <li class="list__element">
            <a href="#" class="element__link">${t('experience')}</a>
          </li>
          <li class="list__element">
            <a href="#" class="element__link">${t('certifications')}</a>
          </li>
          <li class="list__element">
            <a href="#" class="element__link">${t('blog')}</a>
          </li>
          <li class="list__element">
            <a href="#" class="element__link">${t('academy')}</a>
          </li>
          <li class="list__element">
            <a href="#" class="element__link">${t('contact')}</a>
          </li>
        </ul>
      </nav>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .workspaces {
          display: flex;
          align-items: center;
          gap: 1rem;

          .workspaces__list {
            display: flex;
            align-items: center;
            gap: 0.25rem;

            list-style: none;

            .list__element {
              background-color: var(--dark-grey, #1f1f23);

              border-radius: 4px;

              transition: background-color 0.2s;

              &:hover {
                background-color: var(--blue, #273a83);
              }

              .element__link {
                display: block;

                padding: 0.25rem 0.75rem;

                color: var(--white, #fff);

                font-size: 0.9rem;

                text-decoration: none;
                text-align: center;
                white-space: nowrap;
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

customElements.define('twm-workspaces', TwmWorkspaces)
