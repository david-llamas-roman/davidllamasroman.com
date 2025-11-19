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

import { initTheSystem } from '@/utils/the-surface/the-system'
import { initTheSurface } from '@/utils/the-surface/the-surface'

// navigate to the surface version of portfolio
initTheSurface()

// go to thematic version of portfolio (OS - Desktop & Mobile)
initTheSystem()

// lazy loading
const observer = new IntersectionObserver(
  async (entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case 'home': {
            const { initNavbar } = await import('@/utils/the-surface/navbar.js')
            initNavbar()

            const { initId } = await import('@/utils/the-surface/id.js')
            initId()
            break
          }
          case 'about-me': {
            const { initAboutMeCarrousel } = await import(
              '@/utils/the-surface/carrousels.js'
            )
            initAboutMeCarrousel()
            break
          }
          case 'experience': {
            const { initExperienceCarrousels } = await import(
              '@/utils/the-surface/carrousels.js'
            )
            initExperienceCarrousels()
            break
          }
        }

        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.25 },
)

;['home', 'about-me', 'experience'].forEach((id) => {
  const section = document.getElementById(id)
  if (section) observer.observe(section)
})
