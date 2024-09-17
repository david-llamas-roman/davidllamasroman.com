/*
 * This file is part of davidllamasroman.com.
 *
 * davidllamasroman.com is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 *
 * davidllamasroman.com is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with davidllamasroman.com. If not, see <https://www.gnu.org/licenses/gpl-3.0.en.html>.
 *
 * Copyright (C) 2024 David Llamas Román
 */

'use strict'

import changeHash from './changeHash.js'
import changeLanguage from './changeLanguage.js'
import setDarkMode, { setLightMode, setUserThemePreferred } from './darkMode.js'
import getJobs from './jobs.js'
import getProjects from './projects.js'

function main() {
  // anchors
  changeHash()

  // languages
  changeLanguage()

  // appearance
  setDarkMode()
  setLightMode()
  setUserThemePreferred()

  // projects section
  getProjects()

  // experience section
  getJobs()
}

main()
