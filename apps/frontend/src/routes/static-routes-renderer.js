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

window.addEventListener('static:switch', (event) => {
  const { id } = event.detail

  document.body.innerHTML = ''

  let element
  switch (id) {
    case 'creatidevpedia':
      element = document.createElement('creatidevpedia-web')
      break
    case 'dlrdevacademy':
      element = document.createElement('dlrdevacademy-web')
      break
    default:
      break
  }

  document.body.appendChild(element)
})
