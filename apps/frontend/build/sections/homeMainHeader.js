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

import { translations } from '../../src/utils/i18n.js'

const buildHomeMainHeader = (lang) => {
  const aboutMe = translations[lang].workspaces['about-me']
  const projects = translations[lang].workspaces.projects
  const experience = translations[lang].workspaces.experience
  const certifications = translations[lang].workspaces.certifications
  const blog = translations[lang].workspaces.blog
  const academy = translations[lang].workspaces.academy
  const contact = translations[lang].workspaces.contact

  const homeMainHeader = `
    <header class="main__header">
        <div class="header__content">
          <label class="menu" for="open__menu">
            <img src="/img/google-fonts-icons/menu.svg" loading="lazy" alt="Google Fonts Menu Icon">
          </label>
        </div>
        <input type="radio" name="menu__toggle" id="open__menu" hidden>
        <input type="radio" name="menu__toggle" id="close__menu" hidden>
        <nav class="header__navbar">
          <ul>
            <li><a href="#about-me">${aboutMe}</a></li>
            <li><a href="#projects">${projects}</a></li>
            <li><a href="#experience">${experience}</a></li>
            <li><a href="#certifications">${certifications}</a></li>
            <li><a href="#">${blog}</a></li>
            <li><a href="#">${academy}</a></li>
            <li><a href="#contact">${contact}</a></li>
            <ul>
              <li><a href="#front-page"><img src="/img/google-fonts-icons/home.svg" loading="lazy"
                    alt="Google Fonts Home Icon"></a></li>
              <li><label for="close__menu"><img src="/img/google-fonts-icons/close.svg" loading="lazy"
                    alt="Google Fonts Close Icon"></label></li>
            </ul>
          </ul>
        </nav>
      </header>
  `

  return homeMainHeader
}

export default buildHomeMainHeader
