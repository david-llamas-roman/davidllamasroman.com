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
  getIfContainsClass,
  removeClassByClassName,
} from './relatedWithStyles/classes.js'

// CONSTANTS
export const appContainer = getElementById('app')
const showClass = 'show'
const hideClass = 'hide'

// GETTERS
export function getElementById(elementId) {
  return document.getElementById(elementId)
}

export function getElementByClassName(elementClassName) {
  return document.getElementsByClassName(elementClassName)
}

export function getAttributeValue(element, attribute) {
  return element.getAttribute(attribute)
}

export function getIfContainsAttribute(element, attribute) {
  return element.hasAttribute(attribute)
}

// ACTIONS
export function removeAttribute(element, attribute) {
  if (getIfContainsAttribute(element, attribute)) {
    element.removeAttribute(attribute)
  } else {
    console.error('The element has not the attribute')
  }
}

export function addAttribute(element, attribute, value) {
  if (!getIfContainsAttribute(element, attribute)) {
    element.setAttribute(attribute, value)
  } else {
    console.error('The element already has the attribute')
  }
}

export function hideElement(element) {
  if (getIfContainsClass(element, showClass)) {
    removeClassByClassName(element, showClass)
  }

  element.classList.add(hideClass)
}

export function showElement(element) {
  if (getIfContainsClass(element, hideClass)) {
    removeClassByClassName(element, hideClass)
  }

  element.classList.add(showClass)
}
