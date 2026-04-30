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

import { findWorkspaceIdFromPath } from '@/routes/router.js'
import { t } from '@/utils/i18n.js'
import BaseComponent from '@/components/base-component.js'

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
      ${
        window.innerWidth <= 1435
          ? `
          <div class="workspaces-responsive__icons">
            <img src="/img/google-fonts-icons/menu.svg" alt="Google Fonts Menu Icon" class="workspaces-responsive__icon">
            <img src="/img/google-fonts-icons/close.svg" alt="Google Fonts Menu Icon" class="workspaces-responsive__icon hide">
          </div>
        `
          : ''
      }
      <nav class="workspaces">
        <twm-wos-icon></twm-wos-icon>
        <ul class="workspaces__list">
          ${Object.entries(t('workspaces'))
            .map(
              ([key, value]) =>
                `<li class="list__element"><a href="#" class="element__link" data-ws="${key}">${value}</a></li>`,
            )
            .join('')}
        </ul>
      </nav>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .workspaces-responsive__icons {
          position: relative;

          display: grid;
          place-items: center;

          height: 100%;

          .workspaces-responsive__icon {
            width: 30px;
            aspect-ratio: 1/1;

            visibility: visible;
            opacity: 1;
            pointer-events: auto;

            cursor: pointer;

            transition: transform 0.2s, opacity 0.2s;

            &:hover {
              transform: scale(1.1);
            }

            &.hide {
              visibility: hidden;
              opacity: 0;
              pointer-events: none;
            }

            &:nth-child(1) {
              position: absolute;
            }

            &:nth-child(2) {
              filter: brightness(0) invert(1);
            }
          }
        }

        .workspaces {
          display: flex;
          align-items: center;
          gap: 1rem;

          transition: opacity 0.2s;

          @media (width <= 1435px) {
            position: absolute;
            top: 0.6rem;
            left: 4.25rem;
            z-index: 1;

            visibility: hidden;
            opacity: 0;
            pointer-events: none;

            flex-direction: column;

            padding: 1rem 1.5rem 1.6rem 1.5rem;

            background-image: linear-gradient(var(--black, #000), var(--dark-blue, #05020e));

            border: 1px solid var(--white, #fff);
            border-radius: 4px;

            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);

            .workspaces__list {
              flex-direction: column;

              .list__element {
                width: 100%;

                display: flex;
                justify-content: center;
                align-items: center;

                .element__link {
                  flex-grow: 1;
                  flex-shrink: 0;
                }
              }
            }
          }

          &.active {
            visibility: visible;
            opacity: 1;
            pointer-events: auto;
          }

          .workspaces__list {
            display: flex;
            align-items: center;
            gap: 0.25rem;

            list-style: none;

            .list__element {
              background-color: var(--dark-grey, #232327);

              border-radius: 4px;

              transition: background-color 0.2s;

              &:hover {
                background-color: var(--blue, #2c428e);
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
            background-color: var(--blue, #2c428e);
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

    this.shadowRoot
      .querySelector('.workspaces-responsive__icon:nth-child(1)')
      .addEventListener('click', () => {
        const workspaces = this.shadowRoot.querySelector('.workspaces')
        workspaces.classList.add('active')

        const menuIcon = this.shadowRoot.querySelector(
          '.workspaces-responsive__icon:nth-child(1)',
        )
        menuIcon.classList.add('hide')

        const closeIcon = this.shadowRoot.querySelector(
          '.workspaces-responsive__icon:nth-child(2)',
        )
        closeIcon.classList.remove('hide')

        closeIcon.addEventListener('click', () => {
          menuIcon.classList.remove('hide')
          workspaces.classList.remove('active')
          closeIcon.classList.add('hide')
        })
      })

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

    window.addEventListener('resize', this.#handleResize)

    window.addEventListener('workspace:switch', (event) => {
      const id = event?.detail?.id
      if (id) this.#setActiveWorkspace(id)
    })

    window.addEventListener('popstate', () => {
      const workspaceId = findWorkspaceIdFromPath()
      if (workspaceId) this.#setActiveWorkspace(workspaceId)
    })
  }

  #handleResize = () => {
    this.render()
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
