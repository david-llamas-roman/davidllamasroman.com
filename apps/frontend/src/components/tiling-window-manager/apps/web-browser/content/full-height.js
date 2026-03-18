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

class FullHeight extends BaseComponent {
  constructor() {
    super()

    this._resizeObserver = null
  }

  connectedCallback() {
    if (super.connectedCallback) super.connectedCallback()

    const updateHeight = () => this.#setHeightToParent()

    requestAnimationFrame(updateHeight)

    const parent = this.parentElement
    if (parent) {
      this._resizeObserver = new ResizeObserver(updateHeight)
      this._resizeObserver.observe(parent)
    }

    window.addEventListener('resize', updateHeight)

    this._updateHeight = updateHeight
  }

  disconnectedCallback() {
    if (super.disconnectedCallback) super.disconnectedCallback()

    if (this._resizeObserver) {
      this._resizeObserver.disconnect()
    }

    if (this._updateHeight) {
      window.removeEventListener('resize', this._updateHeight)
    }
  }

  getTargetElement() {
    return this
  }

  #setHeightToParent() {
    if (this.isStaticRoute) return

    const parent = this.parentElement
    if (!parent) return

    const target = this.getTargetElement()
    if (!target) return

    target.style.height = `${parent.clientHeight}px`
  }
}

export default FullHeight
