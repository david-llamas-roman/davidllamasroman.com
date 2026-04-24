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

import { getLanguage } from '@/utils/i18n.js'
import { enableTargetAnimations } from '@/utils/the-surface/the-surface'
import updatePageTitle from './dynamic-title'

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
    infodev: ['system/en/infodev', 'system/en/infodev'],
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

const findSurfaceIdFromPath = () => {
  const fullPath = decodeURIComponent(
    window.location.pathname.replace(/^\/+/, ''),
  )

  return Object.keys(theSurface).find((id) =>
    theSurface[id].some((route) => fullPath.endsWith(route)),
  )
}

const initAppContainer = async () => {
  let app = document.getElementById('app')

  if (!app) {
    const body = document.body
    body.innerHTML = ''

    app = document.createElement('div')
    app.id = 'app'

    const mainHeader = document.createElement('main-header')
    const appContent = document.createElement('main')
    appContent.id = 'app__content'

    const mainContent = document.createElement('main-content')
    appContent.appendChild(mainContent)

    const mainFooter = document.createElement('main-footer')

    app.append(mainHeader, appContent, mainFooter)
    body.appendChild(app)

    await import('@/components/components.js')
  }

  return app
}

const handleRoute = async () => {
  const fullPath = window.location.pathname.replace(/^\/+/, '')

  updatePageTitle()

  if (fullPath.startsWith('system/')) {
    await initAppContainer()

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
    }

    const staticRouteId = findStaticRouteIdFromPath()
    if (staticRouteId) {
      if (!spaContent) spaContent = document.body.innerHTML

      window.dispatchEvent(
        new CustomEvent('static:switch', { detail: { id: staticRouteId } }),
      )
    }

    return
  }

  const surfaceId = findSurfaceIdFromPath()
  if (surfaceId) {
    requestAnimationFrame(() => {
      enableTargetAnimations(surfaceId)

      const target = document.getElementById(surfaceId)

      if (target) {
        target.scrollIntoView({ block: 'start' })
      }
    })

    return
  }

  if (!fullPath) {
    window.dispatchEvent(new CustomEvent('home:navigate'))
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

window.addEventListener('static:switch', (event) => {
  const { id } = event.detail

  document.body.innerHTML = ''

  let element
  switch (id) {
    case 'creatidevpedia':
      element = document.createElement('creatidevpedia-web')
      element.setAttribute('static-route', '')
      document.body.style.backgroundColor =
        'var(--creatidevpedia-dark-blue, #121420)'
      break
    case 'infodev':
      element = document.createElement('infodev-web')
      element.setAttribute('static-route', '')
      document.body.style.backgroundColor = 'var(--infodev-dark-grey, #2c2c2c)'
      break
    case 'dlrdevacademy':
      element = document.createElement('dlrdevacademy-web')
      element.setAttribute('static-route', '')
      document.body.style.backgroundColor =
        'var(--dlrdevacademy-dark-blue, #0f0e17)'
      break
    default:
      break
  }

  document.body.appendChild(element)
})

window.addEventListener('app:open-static', (event) => {
  const { id } = event.detail
  if (!id) return

  const lang = getLanguage()
  const target =
    theSystem.static[id].find((route) => route.startsWith(`system/${lang}/`)) ||
    theSystem.static[id][0]

  const prevRoute = window.location.pathname
  const path = `/${target}`

  navigate(path, { prevRoute })
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
