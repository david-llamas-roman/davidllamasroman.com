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

// IMPORTS
import {
  addAttribute,
  appContainer,
  dataThemeAttribute,
  getAttributeValue,
  getElementById,
  hideElement,
  removeAttribute,
  showElement,
} from '../domManagement/elements.js'
import { addEventToElement, clickEvent } from '../domManagement/events.js'

// CONSTANTS
const lightModeBtn = getElementById('light-mode-btn')
const darkModeBtn = getElementById('dark-mode-btn')
const darkTheme = 'dark'
const lightTheme = 'light'
const localStorageItem = 'theme'

// GETTERS
function getUserPreferredTheme() {
  return localStorage.getItem(localStorageItem)
}

// SETTERS
function setUserPreference(item, newTheme) {
  localStorage.setItem(item, newTheme)
}

function setTheme(theme) {
  const element = appContainer

  removeAttribute(element, dataThemeAttribute)
  addAttribute(element, dataThemeAttribute, theme)
}

function setUserPreferredTheme() {
  const defaultTheme = lightTheme
  const userPreferredTheme = getUserPreferredTheme() || defaultTheme

  setTheme(userPreferredTheme)
}

// ACTIONS
function updateThemeChangeButtons() {
  if (getAttributeValue(appContainer, dataThemeAttribute) === darkTheme) {
    hideElement(darkModeBtn)
    showElement(lightModeBtn)
  }

  if (getAttributeValue(appContainer, dataThemeAttribute) === lightTheme) {
    hideElement(lightModeBtn)
    showElement(darkModeBtn)
  }
}

function updateTheme() {
  addEventToElement(darkModeBtn, clickEvent, () => {
    removeAttribute(appContainer, dataThemeAttribute)
    addAttribute(appContainer, dataThemeAttribute, darkTheme),
      updateThemeChangeButtons(),
      setUserPreference(localStorageItem, darkTheme)
  })

  addEventToElement(lightModeBtn, clickEvent, () => {
    removeAttribute(appContainer, dataThemeAttribute)
    addAttribute(appContainer, dataThemeAttribute, lightTheme),
      updateThemeChangeButtons(),
      setUserPreference(localStorageItem, lightTheme)
  })
}

export default function setAndUpdateTheme() {
  setUserPreferredTheme()
  updateTheme()
}
