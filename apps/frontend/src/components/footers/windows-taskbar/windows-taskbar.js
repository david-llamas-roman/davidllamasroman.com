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

class windowsTaskbar extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="taskbar">
        <ul class="taskbar__list">
          <li class="list__element">
            <windows-icon></windows-icon>
          </li>
        </ul>
      </article>
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

    const toggleVisibility = (event) => {
      const fromBottom = window.innerHeight - event.clientY

      if (fromBottom <= showDistance) {
        this.classList.add('visible')
      } else if (!this.matches(':hover')) {
        this.classList.remove('visible')
      }
    }

    document.addEventListener('mousemove', toggleVisibility)

    this.addEventListener('mouseleave', () => {
      this.classList.remove('visible')
    })
  }
}

customElements.define('windows-taskbar', windowsTaskbar)
