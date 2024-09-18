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

// imports
import { hideElement, projectsSectInfo, projectsWarning } from './elements.js'
import { projectsApiUrl, getApiUrlData, convertDataToJson } from './apiUrls.js'

export default async function getProjects() {
  try {
    const data = await convertDataToJson(await getApiUrlData(projectsApiUrl))

    if (data.projects.length !== 0) {
      hideElement(projectsWarning)
    }

    for (let project of data.projects) {
      let name = project.name
      let description = project.description
      let website = project.website
      let gitHubRepositoryUrl = project.gitHubRepositoryUrl
      let startDate = project.startDate
      let endDate = project.endDate

      const properties = [
        name,
        description,
        website,
        gitHubRepositoryUrl,
        startDate,
        endDate,
      ]

      const article = document.createElement('article')
      article.classList.add('art')

      const h3 = document.createElement('h3')
      h3.classList.add('small-title')
      h3.innerText = properties[0]
      article.appendChild(h3)

      for (let i = 1; i < 6; i++) {
        const paragraph = document.createElement('p')

        paragraph.innerText = properties[i]

        if (i <= 4) {
          paragraph.style.display = 'inline-flex'
        }

        article.appendChild(paragraph)
      }

      projectsSectInfo.appendChild(article)
    }
  } catch (e) {
    console.log(e)
  }
}
