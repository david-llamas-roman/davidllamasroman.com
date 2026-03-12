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

function initTheSystem() {
  const theSystemAnchor = document.getElementById('the-system')

  theSystemAnchor.addEventListener('click', (event) => {
    event.preventDefault()

    goToTheSystem()
  })

  removeDisabledStateFromTheSystemAnchor(theSystemAnchor)
}

function removeDisabledStateFromTheSystemAnchor(theSystemAnchor) {
  theSystemAnchor.classList.remove('disabled')
  theSystemAnchor.parentElement.classList.remove('disabled')
}

async function goToTheSystem() {
  const [{ navigate }, { getLanguage }] = await Promise.all([
    import('@/routes/router.js'),
    import('@/utils/the-system/i18n.js'),
  ])

  const language = getLanguage()

  navigate(`/system/${language}/${language === 'en' ? 'about-me' : 'sobre-mi'}`)

  setTimeout(() => {
    window.dispatchEvent(
      new CustomEvent('workspace:switch', { detail: { id: 'about-me' } }),
    )
  }, 0)
}

export { initTheSystem }
