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

import { findWorkspaceIdFromPath } from '../../../../routes/router.js'
import { t } from '../../../../utils/i18n.js'
import BaseComponent from '../../../base-component.js'

class TwmWorkspaces extends BaseComponent {
  constructor() {
    super()

    document.addEventListener('languageChanged', () => this.render())
    document.addEventListener('workspace:switch', (event) =>
      this.#setActiveWorkspace(event?.detail?.id),
    )
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <nav class="workspaces">
        <twm-windows-icon></twm-windows-icon>
        <ul class="workspaces__list">
          <li class="list__element">
            <a href="#" class="element__link" data-ws="about-me">${t('about-me')}</a>
          </li>
          <li class="list__element">
            <a href="#" class="element__link" data-ws="projects">${t('projects')}</a>
          </li>
          <li class="list__element">
            <a href="#" class="element__link" data-ws="experience">${t('experience')}</a>
          </li>
          <li class="list__element">
            <a href="#" class="element__link" data-ws="certifications">${t('certifications')}</a>
          </li>
          <li class="list__element">
            <a href="#" class="element__link" data-ws="blog">${t('blog')}</a>
          </li>
          <li class="list__element">
            <a href="#" class="element__link" data-ws="academy">${t('academy')}</a>
          </li>
          <li class="list__element">
            <a href="#" class="element__link" data-ws="contact">${t('contact')}</a>
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

                font-size: max(14px, 0.75vmax);

                text-decoration: none;
                text-align: center;
                white-space: nowrap;
              }
            }
          }

          .list__element.active {
            background-color: var(--blue, #273a83);
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

    this.shadowRoot.querySelectorAll('.element__link').forEach((anchor) =>
      anchor.addEventListener('click', (event) => {
        event.preventDefault()
        const id = anchor.dataset.ws
        if (!id) return

        window.dispatchEvent(
          new CustomEvent('workspace:navigate', { detail: { id } }),
        )

        this.#setActiveWorkspace(id)
      }),
    )

    const workspaceId = findWorkspaceIdFromPath()
    if (workspaceId) this.#setActiveWorkspace(workspaceId)
  }

  connectedCallback() {
    this.render()

    window.addEventListener('workspace:switch', (event) => {
      const id = event?.detail?.id
      if (id) this.#setActiveWorkspace(id)
    })

    window.addEventListener('popstate', () => {
      const workspaceId = findWorkspaceIdFromPath()
      if (workspaceId) this.#setActiveWorkspace(workspaceId)
    })
  }

  #setActiveWorkspace(id) {
    if (!this.shadowRoot) return

    this.shadowRoot.querySelectorAll('.list__element').forEach((li) => {
      li.classList.remove('active')

      const link = li.querySelector('.element__link')

      if (link && link.dataset.ws === id) {
        li.classList.add('active')
      }
    })
  }
}

customElements.define('twm-workspaces', TwmWorkspaces)
