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

class ArrowsIcon extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    const isLeft = this.hasAttribute('left')
    const isRight = this.hasAttribute('right')

    template.innerHTML = `
      ${this.#getStyles()}
      <button class="button" type="button">
        <p class="arrow">${isLeft ? '&lt;' : isRight ? '&gt;' : ''}</p>
      </button>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .button {
          margin: 0.5rem 0 0.5rem 0.5rem;

          background-color: transparent;

          border: none;

          &:not([disabled]) .arrow {
            color: var(--white, #fff);
          }

          .arrow {
            padding: 0 0.4rem;

            color: var(--light-grey-3, rgba(255, 255, 255, 0.52));

            font-size: max(18px, 1.05vmax);
            font-family: 'Open Sans';
            font-weight: 100;

            text-shadow: 0 0 0.15rem rgba(0, 0, 0.6);

            cursor: pointer;

            transform: scaleY(2);
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

    const button = this.shadowRoot.querySelector('button')

    if (this.hasAttribute('disabled')) {
      button.setAttribute('disabled', '')
    } else {
      button.removeAttribute('disabled')
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'disabled'
        ) {
          if (this.hasAttribute('disabled')) button.setAttribute('disabled', '')
          else button.removeAttribute('disabled')
        }
      })
    })

    observer.observe(this, { attributes: true })
  }
}

customElements.define('arrows-icon', ArrowsIcon)
