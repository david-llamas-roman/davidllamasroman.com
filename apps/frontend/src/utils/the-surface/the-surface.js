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

import { navigate } from '@/routes/router'
import { getLanguage } from '@/utils/the-system/i18n.js'

function initTheSurface() {
  gotToTheSurface()
}

function gotToTheSurface() {
  const theSurfaceAnchor = document.getElementById('the-surface')
  if (!theSurfaceAnchor) return

  theSurfaceAnchor.addEventListener('click', (event) => {
    event.preventDefault()

    const language = getLanguage()

    enableTargetAnimations('about-me')
    navigate(
      `/surface/${language}/${language === 'en' ? 'about-me' : 'sobre-mi'}`,
    )

    const targetElement = document.querySelector(
      theSurfaceAnchor.getAttribute('href'),
    )
    if (!targetElement) return

    targetElement.scrollIntoView({ block: 'start' })
  })
}

function enableTargetAnimations(sectionId) {
  const mainSections = document.querySelectorAll('.home__main > section')

  mainSections.forEach((mainSection) => mainSection.classList.remove('active'))

  const target = document.getElementById(sectionId)
  if (target) target.classList.add('active')
}

export { initTheSurface, enableTargetAnimations }
