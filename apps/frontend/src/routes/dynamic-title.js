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

const pageTitle = {
  'en/home': 'DLR - Home',
  'es/inicio': 'DLR - Inicio',
  'system/en/about-me': 'DLR - System - About Me',
  'system/es/sobre-mi': 'DLR - System - Sobre Mí',
  'system/en/projects': 'DLR - System - Projects',
  'system/es/proyectos': 'DLR - System - Proyectos',
  'system/en/experience': 'DLR - System - Experience',
  'system/es/experiencia': 'DLR - System - Experiencia',
  'system/en/certifications': 'DLR - System - Certificaciones',
  'system/es/certificaciones': 'DLR - System - Certificaciones',
  'system/en/blog': 'DLR - System - Blog',
  'system/es/blog': 'DLR - System - Blog',
  'system/en/academy': 'DLR - System - Academy',
  'system/es/academia': 'DLR - System - Academia',
  'system/en/contact': 'DLR - System - Contact',
  'system/es/contacto': 'DLR - System - Contacto',
  'surface/en/about-me': 'DLR - Surface - About Me',
  'surface/es/sobre-mi': 'DLR - Surface - Sobre Mí',
  'surface/en/projects': 'DLR - Surface - Projects',
  'surface/es/proyectos': 'DLR - Surface - Proyectos',
  'surface/en/experience': 'DLR - Surface - Experience',
  'surface/es/experiencia': 'DLR - Surface - Experiencia',
  'surface/en/certifications': 'DLR - Surface - Certifications',
  'surface/es/certificaciones': 'DLR - Surface - Certificaciones',
  'surface/en/contact': 'DLR - Surface - Contacto',
  'surface/es/contacto': 'DLR - Surface - Contacto',
}

function updatePageTitle() {
  const path = window.location.pathname.replace(/^\/+/, '')
  const title = pageTitle[path] || 'David Llamas Román'
  document.title = title
}

export default updatePageTitle
