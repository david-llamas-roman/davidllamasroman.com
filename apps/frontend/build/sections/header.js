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

const buildHeader = (lang) => {
  const title = translations[lang].root.title
  const subtitle = translations[lang].root.subtitle
  const themeTitle = translations[lang].root.theme.title
  const theSurfaceOption = translations[lang].root.theme.options[1]
  const theSystemOption = translations[lang].root.theme.options[2]

  const header = `
    <header class="home__header" id="front-page">
      <div class="id__container">
        <div class="id">
          <img src="/img/dlr/dlr.png" loading="lazy" alt="David Llamas Román" class="id__photo">
          <div class="id__text">
            <h1>${title}</h1>
            <h2>${subtitle}</h2>
          </div>
        </div>
      </div>
      <div class="theme">
        <h3>${themeTitle}</h3>
        <nav class="theme__navbar">
          <ul>
            <li><a href="#about-me" id="the-surface">${theSurfaceOption}</a></li>
            <li class="disabled"><a href="#" id="the-system" class="disabled">${theSystemOption}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `

  return header
}

export default buildHeader
