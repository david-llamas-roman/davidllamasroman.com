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

// routes
const routes = {
  '/home': 'home',
  '/about-me': 'about-me',
  '/academy': 'academy',
  '/projects': 'projects',
  '/experience': 'experience',
  '/get-in-touch': 'get-in-touch',
  '/account': 'account',
  '/license': 'license',
}

// getters
function getCurrentPath() {
  return window.location.pathname
}

function getRouteByCurrentPath(currentPath) {
  return routes[currentPath]
}

function getSectionById(sectionId) {
  return document.getElementById(sectionId)
}

function getIfContainsClass(element, className) {
  return element.classList.contains(className)
}

// classes management
function removeClassByClassName(element, className) {
  element.classList.remove(className)
}

// elements management
function hideElement(element) {
  if (getIfContainsClass(element, 'show')) {
    removeClassByClassName(element, 'show')
  }

  element.classList.add('hide')
}

function showElement(element) {
  if (getIfContainsClass(element, 'hide')) {
    removeClassByClassName(element, 'hide')
  }

  element.classList.add('show')
}

function router() {
  const currentPath = getCurrentPath()
  const sectionId = getRouteByCurrentPath(currentPath)
  const section = getSectionById(sectionId)

  showElement(section)
  hideElement(section)
}
