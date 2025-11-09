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

import BaseApp from '@/components/tiling-window-manager/apps/base-app.js'

class WebBrowser extends BaseApp {
  constructor() {
    super()
  }

  connectedCallback() {
    super.connectedCallback()
    this.#setupBrowser()

    this.addEventListener('empty-browser', () => {
      this.dispatchEvent(
        new CustomEvent('app:close', { bubbles: true, composed: true }),
      )
    })
  }

  #setupBrowser() {
    const app = this.getAppContainer()

    const content = document.createElement('web-browser-content')

    for (const { name, value } of this.attributes) {
      if (name !== 'style') {
        content.setAttribute(name, value ?? '')
      }
    }

    app.appendChild(content)
  }
}

customElements.define('web-browser', WebBrowser)
