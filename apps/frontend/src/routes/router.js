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

let spaContent = null

const workspacesMap = {
  'about-me': ['en/about-me', 'es/sobre-mi'],
  projects: ['en/projects', 'es/proyectos'],
  experience: ['en/experience', 'es/experiencia'],
  certifications: ['en/certifications', 'es/certificaciones'],
  blog: ['en/blog', 'es/blog'],
  academy: ['en/academy', 'es/academia'],
  contact: ['en/contact', 'es/contacto'],
}

const staticRoutesMap = {
  creatidevpedia: [
    'en/creatidevpedia/dev/David_Llamas_Román',
    'es/creatidevpedia/dev/David_Llamas_Román',
  ],
  dlrdevacademy: ['en/dlrdevacademy', 'es/dlrdevacademy'],
}

const getLangFromUrl = () => {
  const seg = (window.location.pathname.split('/')[1] || '').toLowerCase()
  return seg === 'en' || seg === 'es' ? seg : 'en'
}

const findWorkspaceIdFromPath = () => {
  const fullPath = window.location.pathname.replace(/^\/+/, '')

  return Object.keys(workspacesMap).find(
    (id) => workspacesMap[id].some((route) => fullPath.endsWith(route)) || null,
  )
}

const findStaticRouteIdFromPath = () => {
  const fullPath = decodeURIComponent(
    window.location.pathname.replace(/^\/+/, ''),
  )

  return Object.keys(staticRoutesMap).find(
    (id) =>
      staticRoutesMap[id].some((route) => fullPath.endsWith(route)) || null,
  )
}

const navigate = (path, state = {}) => {
  history.pushState(state, '', path)
  handleRoute()
}

const handleRoute = () => {
  const fullPath = window.location.pathname.replace(/^\/+/, '')

  if (!fullPath) {
    return
  }

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

  const staticRouteId = findStaticRouteIdFromPath()
  if (staticRouteId) {
    if (!spaContent) spaContent = document.body.innerHTML

    window.dispatchEvent(
      new CustomEvent('static:switch', { detail: { id: staticRouteId } }),
    )
    return
  }
}

window.addEventListener('workspace:navigate', (event) => {
  const id = event?.detail?.id
  if (!id || !workspacesMap[id]) return

  const lang = getLangFromUrl()
  const target =
    workspacesMap[id].find((route) => route.startsWith(`${lang}/`)) ||
    workspacesMap[id][0]
  const path = `/${target}`

  history.pushState({}, '', path)
  handleRoute()
})

window.addEventListener('static:navigate', (event) => {
  const id = event?.detail?.id
  if (!id || !staticRoutesMap[id]) return

  const lang = getLangFromUrl()
  const target =
    staticRoutesMap[id].find((route) => route.startsWith(`${lang}/`)) ||
    staticRoutesMap[id][0]
  const path = `/${target}`

  history.pushState({}, '', path)
  handleRoute()
})

window.addEventListener('popstate', handleRoute)
window.addEventListener('DOMContentLoaded', handleRoute)

export { findWorkspaceIdFromPath, getLangFromUrl, staticRoutesMap, navigate }
