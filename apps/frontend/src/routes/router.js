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

import '@/routes/static-routes-renderer.js'
import { getLanguage } from '@/utils/the-system/i18n.js'
import { enableTargetAnimations } from '@/utils/the-surface/the-surface'

let spaContent = null

const theSystem = {
  workspaces: {
    'about-me': ['system/en/about-me', 'system/es/sobre-mi'],
    projects: ['system/en/projects', 'system/es/proyectos'],
    experience: ['system/en/experience', 'system/es/experiencia'],
    certifications: ['system/en/certifications', 'system/es/certificaciones'],
    blog: ['system/en/blog', 'system/es/blog'],
    academy: ['system/en/academy', 'system/es/academia'],
    contact: ['system/en/contact', 'system/es/contacto'],
  },
  static: {
    creatidevpedia: [
      'system/en/creatidevpedia/dev/David_Llamas_Román',
      'system/es/creatidevpedia/dev/David_Llamas_Román',
    ],
    dlrdevacademy: ['system/en/dlrdevacademy', 'system/es/dlrdevacademy'],
  },
}

const theSurface = {
  'about-me': ['surface/en/about-me', 'surface/es/sobre-mi'],
  projects: ['surface/en/projects', 'surface/es/proyectos'],
  experience: ['surface/en/experience', 'surface/es/experience'],
  certifications: ['surface/en/certifications', 'surface/es/certificaciones'],
  contact: ['surface/en/contact', 'surface/es/contact'],
}

const hashToSurfaceId = {
  '#about-me': 'about-me',
  '#projects': 'projects',
  '#experience': 'experience',
  '#certifications': 'certifications',
  '#contact': 'contact',
}

const homeRoute = ['en/home', 'es/inicio']

const findRouteFromPath = (routesGroup) => {
  const fullPath = decodeURIComponent(
    window.location.pathname.replace(/^\/+/, ''),
  )

  return Object.keys(routesGroup).find((id) =>
    routesGroup[id].some((route) => fullPath.endsWith(route)),
  )
}

const findWorkspaceIdFromPath = () => {
  return findRouteFromPath(theSystem.workspaces) || null
}

const findStaticRouteIdFromPath = () => {
  return findRouteFromPath(theSystem.static) || null
}

const handleRoute = () => {
  const fullPath = window.location.pathname.replace(/^\/+/, '')
  const lang = getLanguage()

  if (
    !fullPath ||
    fullPath === lang ||
    homeRoute.some((route) => fullPath.endsWith(route))
  ) {
    window.dispatchEvent(new CustomEvent('home:navigate'))
    return
  }

  // THE SYSTEM - Workspaces
  const workspaceId = findWorkspaceIdFromPath()
  if (workspaceId) {
    if (spaContent) {
      document.body.innerHTML = spaContent
      spaContent = null
      document.body.removeAttribute('style')
    }

    window.dispatchEvent(
      new CustomEvent('workspace:switch', { detail: { id: workspaceId } }),
    )
    return
  }

  // THE SYSTEM - Static Routes
  const staticRouteId = findStaticRouteIdFromPath()
  if (staticRouteId) {
    if (!spaContent) spaContent = document.body.innerHTML

    window.dispatchEvent(
      new CustomEvent('static:switch', { detail: { id: staticRouteId } }),
    )
    return
  }
}

const navigate = (path, state = {}) => {
  history.pushState(state, '', path)
  handleRoute()
}

window.addEventListener('workspace:navigate', (event) => {
  const id = event?.detail?.id
  if (!id || !theSystem.workspaces[id]) return

  const lang = getLanguage()
  const target =
    theSystem.workspaces[id].find((route) =>
      route.startsWith(`system/${lang}/`),
    ) || theSystem.workspaces[id][0]
  const path = `/${target}`

  history.pushState({}, '', path)
  handleRoute()
})

window.addEventListener('static:navigate', (event) => {
  const id = event?.detail?.id
  if (!id || !theSystem.static[id]) return

  const lang = getLanguage()
  const target =
    theSystem.static[id].find((route) => route.startsWith(`system/${lang}/`)) ||
    theSystem.static[id][0]
  const path = `/${target}`

  history.pushState({}, '', path)
  handleRoute()
})

window.addEventListener('surface:navigate', (event) => {
  const id = event?.detail?.id
  if (!id || !theSurface[id]) return

  enableTargetAnimations(id)

  const lang = getLanguage()
  const target =
    theSurface[id].find((route) => route.startsWith(`surface/${lang}/`)) ||
    theSurface[id][0]
  const path = `/${target}`

  history.pushState({}, '', path)
  handleRoute()
})

window.addEventListener('popstate', handleRoute)
window.addEventListener('DOMContentLoaded', handleRoute)

export { findWorkspaceIdFromPath, theSystem, navigate, hashToSurfaceId }
