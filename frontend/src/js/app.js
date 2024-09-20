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

// page titles
const titles = {
  '/home': 'David Llamas Roman',
  '/about-me': 'DLR - About me',
  '/academy': 'DLR - Academy',
  '/projects': 'DLR - Projects',
  '/experience': 'DLR - Experience',
  '/get-in-touch': 'DLR - Get in touch',
  '/account': 'DLR - Account',
  '/license': 'DLR - License',
}

// getters
function getCurrentPath() {
  return window.location.pathname
}

function getRouteByCurrentPath(currentPath) {
  return routes[currentPath]
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

function addEventToElement(element, event, action) {
  element.addEventListener(event, action)
}

// router
function router() {
  const currentPath = getCurrentPath()
  const sectionId = getRouteByCurrentPath(currentPath)
  const section = getElementById(sectionId)

  showElement(section)
  hideElement(section)
}

// navigation
function navigateTo(route) {
  history.pushState(
    null,
    getTitleByRoute(getRouteByCurrentPath(getCurrentPath())),
    route,
  )

  router()
}

function handleNavbarLinks(linkType) {
  const link = linkType

  addEventToElement(link, 'click', () =>
    navigateTo(getElementAttribute(link, 'data-link')),
  )
}

// main
function main() {
  // navigation
  const navbarLinks = getElementByClassName('navbar-link')

  handleNavbarLinks(navbarLinks)
}

main()

//! element.addEventListener is not a function
