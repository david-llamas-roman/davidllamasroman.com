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

// imports
import {
  darkModeBtn,
  lightModeBtn,
  container,
  hideElement,
  showElement,
  checkIfAttributeExists,
  removeAttribute,
} from './elements.js'

export default function setAndUpdateTheme() {
  setUserThemePreferred()
  setDarkMode()
  setLightMode()
}

function setDarkMode() {
  darkModeBtn.addEventListener('click', () => {
    checkIfAttributeExists('data-theme', () => removeAttribute('data-theme'))

    container.setAttribute('data-theme', 'dark')

    hideElement(darkModeBtn)
    showElement(lightModeBtn)
  })
}

function setLightMode() {
  lightModeBtn.addEventListener('click', () => {
    checkIfAttributeExists('data-theme', () => removeAttribute('data-theme'))

    container.setAttribute('data-theme', 'light')

    hideElement(lightModeBtn)
    showElement(darkModeBtn)
  })
}

function getUserPreference() {
  return localStorage.getItem('theme')
}

function setUserThemePreferred() {
  const userPreference = getUserPreference()

  checkIfAttributeExists('data-theme', () => removeAttribute('data-theme'))

  if (userPreference == undefined) {
    container.setAttribute('data-theme', 'light')
  }

  if (userPreference == 'dark') {
    hideElement(darkModeBtn)
    showElement(lightModeBtn)
  }

  container.setAttribute('data-theme', userPreference)
}
