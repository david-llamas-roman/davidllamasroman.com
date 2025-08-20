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

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', currentLanguage)
}

const translations = {
  en: {
    'about-me': 'About Me',
    projects: 'Projects',
    experience: 'Experience',
    certifications: 'Certifications',
    blog: 'Blog',
    academy: 'Academy',
    contact: 'Contact',
    'wikipedia-logo': 'The Free Encyclopedia',
    'full-stack-developer': 'Full-stack Developer',
    biography: 'Biography',
    born: 'Born',
    'dream-title': 'Dream',
    dream: 'Tech Entrepreneur',
    occupation: 'Occupation',
    unicorn: 'Operation Unicorn',
    'spouse-title': 'Spouse',
    spouse: 'JavaScript',
    'wikipedia-about-me': `
      <p>
        <strong>At 11</strong>, I was <span>making mini-games with Scratch</span>.
      </p>
      <p>
        <strong>At 13</strong>, I already knew <span>my path wasn't going to be like everyone else's</span>, I <strong>created my first YouTube channel</strong>.
      </p>
      <p>
        <strong>At 14</strong>, I <strong>wrote my first line of code</strong>, in <span>C++</span>.
      </p>
      <p>
        <strong>At 15</strong>, I deleted my first YouTube channel after getting a strike, I <span>fell into an endless loop of making bad decisions</span>.
      </p>
      <p>
        <strong>At 16</strong>, I <strong>started learning Python</strong> and restarted on YouTube.
      </p>
      <p>
        <strong>At 17</strong>, I quit YouTube again, left Python behind, <span>discovered web development</span>, and began <strong>creating vertical content</strong> for Instagram and TikTok.
      </p>
      <p>
        <strong>At 18</strong>, I continued with <strong>web development</strong> and kept making <span>vertical programming content</span>.
      </p>
      <p>
        <strong>At 19</strong>, after yet another attempt at creating content for YouTube, I deleted all my social media accounts and, of course, <strong>kept working on web development</strong>.
      </p>
      <p>
        <strong>At 20</strong>, <span>here I am, writing this</span>, <span>learning about personal branding</span>, about social media, <span>continuing on this long-distance journey</span>, and <strong>starting to build projects that go beyond just learning</strong>. Web apps that can actually be used and have a real-world application.
      </p>
    `,
  },
  es: {
    'about-me': 'Sobre Mí',
    projects: 'Proyectos',
    experience: 'Experiencia',
    certifications: 'Certificaciones',
    blog: 'Blog',
    academy: 'Academia',
    contact: 'Contacto',
    'wikipedia-logo': 'La enciclopedia libre',
    'full-stack-developer': 'Desarrollador Full-stack',
    biography: 'Biografía',
    born: 'Nacimiento',
    'dream-title': 'Sueño',
    dream: 'Empresario Tecnológico',
    occupation: 'Ocupación',
    unicorn: 'Operación Unicornio',
    'spouse-title': 'Pareja',
    spouse: 'JavaScript',
    'wikipedia-about-me': `
      <p>
        A los 11, hacía minijuegos con Scratch.
      </p>
      <p>
        A los 13, ya tenía claro que mi camino no iba a ser igual al del resto, creé mi primer canal de YouTube.
      </p>
      <p>
        A los 14, escribí mi primera línea de código, en C++.
      </p>
      <p>
        A los 15, eliminé mi primer canal de YouTube debido a un strike, entré en un bucle infinito de tomar malas decisiones.
      </p>
      <p>
        A los 16, empecé a aprender Python y volví a empezar en YouTube.
      </p>
      <p>
        A los 17, volví a dejar YouTube, dejé Python, descubrí el desarrollo web y empecé a crear contenido vertical para Instagram y TikTok.
      </p>
      <p>
        A los 18, seguí con el desarrollo web y seguí creando contenido vertical de programación.
      </p>
      <p>
        A los 19, después de hacer otro intento de crear contenido para YouTube, eliminé todas mis redes y, por supuesto, seguí con el desarrollo web.
      </p>
      <p>
        A los 20, aquí estoy, escribiendo esto, aprendiendo de marca personal, de redes, continuando en esta carrera de fondo y empezando a hacer proyectos que no se limiten únicamente al ámbito del aprendizaje. Aplicaciones web que puedan ser utilizadas y tengan una aplicación en el mundo real.
      </p>
    `,
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
