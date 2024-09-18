/*
 * This file is part of davidllamasroman.com.
 *
 * davidllamasroman.com is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 *
 * davidllamasroman.com is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with davidllamasroman.com. If not, see <https://www.gnu.org/licenses/gpl-3.0.en.html>.
 *
 * Copyright (C) 2024 David Llamas Román
 */

'use strict'

import { selectLanguageBtn, darkModeBtn, lightModeBtn } from './elements.js'

export default function hrefValuesChange() {
  let hash

  window.addEventListener('hashchange', () => {
    hash = getHash()

    selectLanguageBtn.href = hash
    darkModeBtn.href = hash
    lightModeBtn.href = hash
  })
}

function getHash() {
  return window.location.hash
}
