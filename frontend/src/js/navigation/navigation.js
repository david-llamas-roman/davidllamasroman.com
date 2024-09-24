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
import { getAttributeValue } from '../domManagement/elements.js'
import addEventToElement from '../domManagement/events.js'
import { getTitleByRoute } from './pageTitles.js'
import { getRouteByPath, getCurrentPath, router } from './router.js'

// ACTIONS
export function navigateTo(route) {
  history.pushState(
    null,
    () => getTitleByRoute(getRouteByPath(getCurrentPath())),
    route,
  )

  router()
}

export function handleNavbarLinks(linkType) {
  const attribute = 'data-link'
  const link = linkType

  addEventToElement(link, 'click', (event) => {
    event.preventDefault()
    navigateTo(getAttributeValue(link, attribute))
  })
}
