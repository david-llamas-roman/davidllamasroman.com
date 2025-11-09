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

// go to thematic version of portfolio (OS - Desktop & Mobile)
const theSystemAnchor = document.getElementById('the-system')
theSystemAnchor.addEventListener('click', async (event) => {
  event.preventDefault()

  const [{ navigate }, { getLanguage }] = await Promise.all([
    import('@/routes/router.js'),
    import('@/utils/the-system/i18n.js'),
  ])

  await import('@/components/components.js')

  const body = document.body
  body.innerHTML = ''

  const app = document.createElement('div')
  app.id = 'app'
  const mainHeader = document.createElement('main-header')

  const appContent = document.createElement('main')
  appContent.id = 'app__content'
  const mainContent = document.createElement('main-content')
  appContent.appendChild(mainContent)

  const mainFooter = document.createElement('main-footer')
  app.append(mainHeader, appContent, mainFooter)

  const language = getLanguage()

  if (language === 'en') {
    navigate('en/about-me')
  } else if (language === 'es') {
    navigate('es/sobre-mi')
  }

  body.appendChild(app)
})

// if JS is enabled
theSystemAnchor.classList.remove('disabled')
theSystemAnchor.parentElement.classList.remove('disabled')

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
