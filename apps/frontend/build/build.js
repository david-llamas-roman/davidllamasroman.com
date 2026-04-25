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

import fs from 'node:fs'
import path from 'node:path'
import layout from './templates/layout.js'
import buildHeader from './sections/header.js'
import buildHomeMainHeader from './sections/homeMainHeader.js'
import buildAboutMe from './sections/about-me.js'
import buildProjects from './sections/projects.js'
import buildExperience from './sections/experience.js'
import buildContact from './sections/contact.js'
import buildFooter from './sections/footer.js'
import buildCertifications from './sections/certifications.js'

const lang = 'en'

const content = `
  ${buildHeader(lang)}
  <main class="home__main">
    ${buildHomeMainHeader(lang)}
    ${buildAboutMe(lang)}
    ${buildProjects(lang)}
    ${buildExperience(lang)}
    ${buildCertifications(lang)}
    ${buildContact(lang)}
  </main>
  ${buildFooter(lang)}
`
const html = layout({ content })

fs.writeFileSync(path.resolve('./index.html'), html, 'utf-8')
