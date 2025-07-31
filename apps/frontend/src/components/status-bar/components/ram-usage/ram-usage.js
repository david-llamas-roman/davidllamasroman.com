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

import { getRamUsagePercentage } from '../../../../services/systemDataService.js'
import logger from '../../../../utils/logger.js'

class ramUsage extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
  }

  getTemplate(percentage) {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.getStyles()}
      <article>
        <label class="percentage">${percentage}%</label>
      </article>
    `

    return template
  }

  getStyles() {
    return `<style></style>`
  }

  async render(percentage = 0) {
    logger.debug('[ram-usage] Rendering initial markup...')
    this.shadowRoot.innerHTML = ''
    this.shadowRoot.appendChild(
      this.getTemplate(percentage).content.cloneNode(true),
    )
  }

  updatePercentage(percentage) {
    const label = this.shadowRoot.querySelector('.percentage')
    percentage
    if (label) {
      label.textContent = `${percentage}%`
    }
  }

  connectedCallback() {
    logger.log('[ram-usage] Component connected')
    this.render(0)
    getRamUsagePercentage((percentage) => {
      logger.info(`[ram-usage] Ram usage update: ${percentage}`)
      this.updatePercentage(percentage)
    })
  }
}

customElements.define('ram-usage', ramUsage)
