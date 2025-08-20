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

import { getCpuUsagePercentage } from '../../../../services/systemDataService.js'
import logger from '../../../../utils/logger.js'
import BaseComponent from '../../../base-component.js'

class CpuUsage extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate(percentage) {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="cpu">
        <label class="percentage">${percentage}%</label>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .cpu {
          .percentage {
            font-size: max(14px, 0.75vmax);
          }
        }
      </style>
    `
  }

  async render(percentage = 0) {
    logger.debug('[cpu-usage] Rendering initial markup...')

    const sheets = this.shadowRoot.adoptedStyleSheets

    this.shadowRoot.replaceChildren()

    this.shadowRoot.adoptedStyleSheets = sheets

    this.shadowRoot.appendChild(
      this.#getTemplate(percentage).content.cloneNode(true),
    )
  }

  #updatePercentage(percentage) {
    const label = this.shadowRoot.querySelector('.percentage')

    if (label) {
      label.textContent = `${percentage}%`
    }
  }

  connectedCallback() {
    logger.log('[cpu-usage] Component connected')
    this.render(0)
    getCpuUsagePercentage((percentage) => {
      logger.info(`[cpu-usage] Cpu usage update: ${percentage}`)
      this.#updatePercentage(percentage)
    })
  }
}

customElements.define('cpu-usage', CpuUsage)
