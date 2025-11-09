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

class WosTaskbar extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <footer class="taskbar">
        <p class="copyright">&copy; 2025 David Llamas Román. Licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GNU General Public License version 3 (GPL-3.0) only</a>.</p>
        <ul class="taskbar__list">
          <li class="list__element">
            <wos-icon></wos-icon>
          </li>
        </ul>
      </footer>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        :host {
          position: fixed;
          bottom: 0;
          left: 0;

          display: grid;
          place-items: center;

          width: var(--max-percentage, 100%);

          transform: translateY(var(--max-percentage, 100%));
          transition: transform 0.4s ease-in-out;

          z-index: 3;
        }

        :host(.visible) {
          transform: translateY(0);
        }

        .taskbar {
          position: relative;

          display: grid;
          place-items: center;

          width: var(--max-percentage, 100%);

          padding: 0.65rem;

          background-color: rgba(41, 41, 41, 0.6);
          backdrop-filter: blur(10px);

          border-top: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);

          .taskbar__list {
            list-style: none;

            .list__element {
              filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.6));

              cursor: pointer;

              &:hover {
                filter: brightness(1.5);
              }
            }
          }

          .copyright {
            position: absolute;
            left: 0;

            padding: 0 1rem;

            color: var(--white, #fff);

            font-size: max(13px, 0.65vmax);
            text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.6);

            & a {
              color: var(--white, #fff);

              font-style: italic;

              text-shadow: 0 0 0.15rem var(--white, #fff);
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

    const showDistance = 50
    let menu = null

    const ensureMenu = () => {
      const app = document.getElementById('app')
      const existingWosMenu = document.querySelector('wos-menu')

      if (window.matchMedia('(min-width: 1025px)').matches) {
        if (!existingWosMenu) {
          menu = document.createElement('wos-menu')
          app.appendChild(menu)
        } else {
          menu = existingWosMenu
        }
      } else {
        if (existingWosMenu) {
          existingWosMenu.remove()
          menu = null
        }
      }
    }

    ensureMenu()
    window.addEventListener('resize', ensureMenu)

    const toggleVisibility = (event) => {
      const fromBottom = window.innerHeight - event.clientY

      if (fromBottom <= showDistance) {
        this.classList.add('visible')
      } else if (!this.matches(':hover') && !(menu && menu.matches(':hover'))) {
        this.classList.remove('visible')

        if (menu) {
          menu.classList.remove('visible')
        }
      }
    }

    document.addEventListener('mousemove', toggleVisibility)

    this.addEventListener('mouseleave', () => {
      if (!menu.matches(':hover')) {
        this.classList.remove('visible')
      }
    })

    this.shadowRoot
      .querySelector('.list__element')
      .addEventListener('click', () => {
        if (!menu) return

        if (this.classList.contains('visible')) {
          menu.classList.toggle('visible')
        }
      })
  }
}

customElements.define('wos-taskbar', WosTaskbar)
