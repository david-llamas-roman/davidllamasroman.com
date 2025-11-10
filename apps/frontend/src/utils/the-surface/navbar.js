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

function initNavbar() {
  closeNavbar()
}

// close navbar when we click in the anchor - 'main__header' navbar
function closeNavbar() {
  const mainHeaderNavbar = document.querySelector(
    '#home .home__main .main__header .header__navbar',
  )

  mainHeaderNavbar
    .querySelector('ul')
    .querySelectorAll('li a')
    .forEach((anchor) => {
      anchor.addEventListener('click', () => {
        mainHeaderNavbar.querySelector('ul ul li label').click()
      })
    })
}

export { initNavbar }
