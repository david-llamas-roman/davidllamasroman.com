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

const routes = {
  en: {
    '/about-me': renderAboutMe,
    '/projects': renderProjects,
    '/experience': renderExperience,
    '/certifications': renderCertifications,
    '/blog': renderBlog,
    '/academy': renderAcademy,
    '/contact': renderContact,
  },
  es: {
    '/sobre-mi': renderAboutMe,
    '/proyectos': renderProjects,
    '/certificaciones': renderCertifications,
    '/blog': renderBlog,
    '/academia': renderAcademy,
    '/contact': renderContact,
  },
}

const navigate = (path) => {
  history.pushState({}, '', path)
  handleRoute()
}

const handleRoute = () => {
  const fullPath = window.location.pathname
  const [, lang, ...rest] = fullPath.split('/')
  const path = '/' + rest.join('/')

  const language = routes[lang] ? lang : 'en'
  const viewFn = routes[language][path] || renderNotFound

  const appContent = document.getElementById('app__content')
  appContent.innerHTML = ''

  viewFn(appContent)
}

export { navigate, handleRoute }
