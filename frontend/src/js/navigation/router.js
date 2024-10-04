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
  getElementById,
  hideElement,
  showElement,
} from '../domManagement/elements.js'
import getPreviousPath from '../navigation/history.js'

// CONSTANTS
const routes = {
  '/': 'home',
  '/about-me': 'about-me',
  '/academy': 'academy',
  '/projects': 'projects',
  '/experience': 'experience',
  '/get-in-touch': 'get-in-touch',
  '/your-account': 'your-account',
  '/licenses': 'licenses',
}

// GETTERS
export function getCurrentPath() {
  return window.location.pathname
}

export function getRouteByPath(path) {
  return routes[path]
}

// ACTIONS
export function router() {
  const previousPath = getPreviousPath()
  const previousSectionId = getRouteByPath(previousPath)
  const previousSection = getElementById(previousSectionId)

  hideElement(previousSection)

  const currentPath = getCurrentPath()
  const sectionId = getRouteByPath(currentPath)
  const section = getElementById(sectionId)

  showElement(section)
}
