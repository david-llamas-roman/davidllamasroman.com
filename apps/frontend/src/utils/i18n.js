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

const supportedLanguages = ['es', 'en']

let currentLanguage =
  localStorage.getItem('lang') ||
  (supportedLanguages.includes(navigator.language.split('-')[0])
    ? navigator.language.split('-')[0]
    : 'en')

const translations = {
  en: {
    'about-me': 'About Me',
    projects: 'Projects',
    experience: 'Experience',
    certifications: 'Certifications',
    blog: 'Blog',
    academy: 'Academy',
    contact: 'Contact',
  },
  es: {
    'about-me': 'Sobre Mí',
    projects: 'Proyectos',
    experience: 'Experiencia',
    certifications: 'Certificaciones',
    blog: 'Blog',
    academy: 'Academia',
    contact: 'Contacto',
  },
}

const t = (key) => {
  return translations[currentLanguage]?.[key] || key
}

const setLanguage = (language) => {
  if (!supportedLanguages.includes(language)) return

  currentLanguage = language
  localStorage.setItem('lang', language)
  document.dispatchEvent(
    new CustomEvent('languageChanged', { detail: language }),
  )
}

const getLanguage = () => {
  return currentLanguage
}

export { t, setLanguage, getLanguage }
