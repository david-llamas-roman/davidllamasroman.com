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

'use strict '

import { getBatteryPercent } from '../../../../services/systemDataService.js'
import logger from '../../../../utils/logger.js'

class batteryBar extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
  }

  getTemplate(level) {
    const template = document.createElement('template')
    const showPercentage = this.hasAttribute('percentage')

    template.innerHTML = `
      ${this.getStyles()}
      <article class="battery">
        <input id="battery__bar" type="range" min=0 max=100 value=0 disabled />
        ${showPercentage ? `<label class="percentage" for="battery__bar">${level}%</label>` : ''}
      </article>
    `

    return template
  }

  getStyles() {
    return `
      <style>
        .battery {
          display: flex;
          align-items: center;
          gap: 0.25rem;

          #battery__bar {
              -webkit-appearance: none;
              -moz-appearance: none;

              width: 30px;
              height: 15px;
              
              background: lightgray;
              
              outline: none;
              border-radius: 4px;
              
              cursor: default;

            &::-webkit-slider-runnable-track {
              height: 15px;

              background: transparent;

              border-radius: 4px;
            }

            &::-moz-range-track {
              height: 15px;

              background: transparent;

              border-radius: 4px;
            }

            &::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;

              width: 0;
              height: 0;

              background: transparent;

              border: none;
              pointer-events: none;
            }

            &::-moz-range-thumb {
              width: 0;
              height: 0;

              background: transparent;

              border: none;
              pointer-events: none;
            }
          }
        }
      </style>
    `
  }

  async render(level = 0) {
    logger.debug('[battery-bar] Rendering initial markup...')
    this.shadowRoot.innerHTML = ''
    this.shadowRoot.appendChild(this.getTemplate(level).content.cloneNode(true))
  }

  updateLevel(level) {
    const bar = this.shadowRoot.querySelector('#battery__bar')
    const label = this.shadowRoot.querySelector('.percentage')

    if (bar) {
      const color = 'limegreen'
      bar.style.background = `linear-gradient(to right, ${color} 0%, ${color} ${level}%, lightgray ${level}%, lightgray 100%)`
    }

    if (label) {
      label.textContent = `${level}%`
    }
  }

  connectedCallback() {
    logger.log('[battery-bar] Component connected')
    this.render(0)
    getBatteryPercent((level) => {
      logger.info(`[battery-bar] Battery update: ${level}%`)
      this.updateLevel(level)
    })
  }
}

customElements.define('battery-bar', batteryBar)
