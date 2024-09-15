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

const sectInfo = document.querySelector('#experience .sect-info')

const apiUrl = 'http://localhost:3700/api/jobs'

export default async function getJobs() {
  try {
    const res = await fetch(apiUrl)

    const data = await res.json()

    if (data.jobs.length !== 0) {
      const warning = document.querySelector('#experience .warning')
      warning.style.display = 'none'
    }

    for (let job of data.jobs) {
      let title = job.title
      let employmentType = job.employmentType
      let companyName = job.companyName
      let location = job.location
      let locationType = job.locationType
      let startDate = job.startDate
      let endDate = job.endDate
      //let currentlyWorkingHere = job.currentlyWorkingHere

      const properties = [
        title,
        employmentType,
        companyName,
        location,
        locationType,
        startDate,
        endDate,
      ]

      const article = document.createElement('article')
      article.classList.add('art')

      const h3 = document.createElement('h3')
      h3.classList.add('small-title')
      h3.innerText = properties[0]
      article.appendChild(h3)

      for (let i = 1; i < 7; i++) {
        const paragraph = document.createElement('p')

        paragraph.innerText = properties[i]

        if (i <= 4) {
          paragraph.style.display = 'inline-flex'
        }

        article.appendChild(paragraph)
      }

      sectInfo.appendChild(article)
    }
  } catch (e) {
    console.log(e)
  }
}
