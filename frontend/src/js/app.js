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
  '/': 'home',
  '/about-me': 'about-me',
  '/academy': 'academy',
  '/projects': 'projects',
  '/experience': 'experience',
  '/get-in-touch': 'get-in-touch',
  '/account': 'account',
  '/license': 'license',
}

// page titles
const titles = {
  '/': 'David Llamas Roman',
  '/about-me': 'DLR - About me',
  '/academy': 'DLR - Academy',
  '/projects': 'DLR - Projects',
  '/experience': 'DLR - Experience',
  '/get-in-touch': 'DLR - Get in touch',
  '/account': 'DLR - Account',
  '/license': 'DLR - License',
}

// history stack
const historyStack = ['/']

// getters
function getPreviousPath() {
  const positionNumberToGetPenultimateValue = 2
  const positionNumberToGetLastValue = 1
  let index

  if (history.length <= 2) {
    index = historyStack.length - positionNumberToGetPenultimateValue
  }

  index = historyStack.length - positionNumberToGetLastValue

  return historyStack[index]
}

function getCurrentPath() {
  return window.location.pathname
}

function getRouteByPath(path) {
  return routes[path]
}

function getTitleByRoute(route) {
  return titles[route]
}

function getElementById(elementId) {
  return document.getElementById(elementId)
}

function getElementByClassName(elementClassName) {
  return document.getElementsByClassName(elementClassName)
}

function getElementAttribute(element, attribute) {
  return element.getAttribute(attribute)
}

function getIfContainsClass(element, className) {
  return element.classList.contains(className)
}

// history stack management
// function addRouteToHistoryStack() {
//   const positionNumberToGetLastValue = 1
//   const currentPath = getCurrentPath()

//   if (
//     historyStack[historyStack.length - positionNumberToGetLastValue] !==
//     currentPath
//   ) {
//     historyStack.push(currentPath)
//   }
// }

// function updateHistoryStack() {
//   addRouteToHistoryStack()
// }

// classes management
function removeClassByClassName(element, className) {
  element.classList.remove(className)
}

// events management
function addEventToElement(element, event, action) {
  element.addEventListener(event, action)
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

// router
function router() {
  const previousPath = getPreviousPath()
  const previousSectionId = getRouteByPath(previousPath)
  const previousSection = getElementById(previousSectionId)

  hideElement(previousSection)

  const currentPath = getCurrentPath()
  const sectionId = getRouteByPath(currentPath)
  const section = getElementById(sectionId)

  showElement(section)
}

// navigation
function navigateTo(route) {
  history.pushState(
    null,
    () => getTitleByRoute(getRouteByPath(getCurrentPath())),
    route,
  )

  router()
}

function handleNavbarLinks(linkType) {
  const link = linkType

  addEventToElement(link, 'click', (event) => {
    event.preventDefault()
    navigateTo(getElementAttribute(link, 'data-link'))
  })
}

// main
function main() {
  // history stack
  // updateHistoryStack()

  // navigation
  const navbarLinks = getElementByClassName('navbar-link')

  for (let navbarLink of navbarLinks) {
    handleNavbarLinks(navbarLink)
  }
}

main()
