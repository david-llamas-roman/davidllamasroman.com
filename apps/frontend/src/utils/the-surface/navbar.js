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

import { hashToSurfaceId, navigate } from '@/routes/router'
import { getLanguage } from '@/utils/the-system/i18n.js'

function initNavbar() {
  setUpSpaNavigation()
  closeNavbar()
}

function setUpSpaNavigation() {
  const mainHeaderNavbar = document.querySelector(
    '#home .home__main .main__header .header__navbar',
  )

  mainHeaderNavbar.querySelectorAll('ul li a').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault()

      const language = getLanguage()

      const homeIcon = anchor.querySelector('img')
      if (
        anchor.getAttribute('href') === '#front-page' &&
        homeIcon?.src.includes('home.svg')
      ) {
        navigate(`/${language}/${language === 'en' ? 'home' : 'inicio'}`)

        document
          .querySelector(anchor.getAttribute('href'))
          .scrollIntoView({ block: 'start' })
        return
      }

      const hash = anchor.getAttribute('href')
      if (!hash) return

      const id = hashToSurfaceId[hash.toLowerCase()]
      if (!id) return

      window.dispatchEvent(
        new CustomEvent('surface:navigate', { detail: { id } }),
      )

      const targetElement = document.querySelector(hash)
      if (!targetElement) return

      targetElement.scrollIntoView({ block: 'start' })
    })
  })
}

function closeNavbar() {
  const mainHeaderNavbar = document.querySelector(
    '#home .home__main .main__header .header__navbar',
  )

  mainHeaderNavbar.querySelectorAll('ul li a').forEach((anchor) => {
    anchor.addEventListener('click', () => {
      mainHeaderNavbar.querySelector('ul ul li label').click()
    })
  })
}

export { initNavbar }
