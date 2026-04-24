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
import { getFormattedDateWithoutTime } from '../../src/utils/formatters.js'

const buildExperience = (lang) => {
  const title = translations[lang].experience.title

  const parseDate = (value) => {
    if (!value) return 0

    const str = String(value).toLowerCase()

    if (str.includes('present') || str.includes('presente')) {
      return Date.now()
    }

    const monthMap = {
      january: 0,
      february: 1,
      march: 2,
      april: 3,
      may: 4,
      june: 5,
      july: 6,
      august: 7,
      september: 8,
      october: 9,
      november: 10,
      december: 11,
    }

    const monthRegex =
      /(january|february|march|april|may|june|july|august|september|october|november|december)\s+(\d{4})/gi

    const matches = [...str.matchAll(monthRegex)]

    if (matches.length) {
      const last = matches[matches.length - 1]
      const month = last[1]
      const year = Number(last[2])

      return new Date(year, monthMap[month], 1).getTime()
    }

    const years = str.match(/\d{4}/g)
    if (!years) return 0

    return new Date(Number(years.at(-1)), 0, 1).getTime()
  }

  const jobs = Object.values(translations[lang].experience.jobs)

  const sortJobs = (a, b) => {
    return parseDate(b.date) - parseDate(a.date)
  }

  const sortedJobs = jobs.toSorted(sortJobs)

  const getGroupKey = (job) => {
    if (!job.company || job.company.trim() === '') return 'private-tutoring'

    return job.company.toLowerCase().replace(/\s+/g, '-')
  }

  const groupedJobs = sortedJobs.reduce((accumulator, job) => {
    const key = getGroupKey(job)

    if (!accumulator[key]) {
      accumulator[key] = []
    }

    accumulator[key].push(job)

    return accumulator
  }, {})

  Object.keys(groupedJobs).forEach((key) => {
    groupedJobs[key].sort(sortJobs)
  })

  const getLatestJob = (jobs) =>
    Math.max(...jobs.map((job) => parseDate(job.date)))

  const sortedGroups = Object.entries(groupedJobs).sort(
    ([keyA, jobsA], [keyB, jobsB]) => {
      const isPrivateA = keyA === 'private-tutoring'
      const isPrivateB = keyB === 'private-tutoring'

      if (isPrivateA && !isPrivateB) return 1
      if (!isPrivateA && isPrivateB) return -1

      return getLatestJob(jobsB) - getLatestJob(jobsA)
    },
  )

  const labels = translations[lang].experience.labels

  const experience = `
    <section class="section" id="experience">
      <h2 class="section__title">${title}</h2>
      <div class="section__content">
        <ul class="card__list">
          ${sortedGroups
            .map(([groupKey, jobs]) => {
              if (!jobs.length) return ''

              const labelId = `flip-${groupKey}`
              const companyName =
                groupKey === 'private-tutoring'
                  ? 'Private Tutoring'
                  : jobs[0].company
              const location =
                groupKey === 'private-tutoring' ? '' : jobs[0].location

              return `
              <li class="list__element">
                <article class="card">
                  <input type="checkbox" id="${labelId}" class="card__toggle" hidden>
                  <div class="card__inner">
                    <div class="card__front">
                      <header class="front__header">
                        <div>
                          <h3>${companyName}</h3>
                          ${location ? `<h4>${location}</h4>` : ''}
                        </div>
                        <label for="${labelId}">${labels[1]}</label>
                      </header>
                      <article class="carrousel">
                        <div class="slides">
                          ${jobs
                            .map(
                              (job) => `
                              <article class="slide">
                                <div class="slide__text">
                                  <h4>${job.title}</h4>
                                  <h5>${job.date}</h5>
                                  <h5>${job['employment-type']}</h5>
                                </div>
                              </article>
                            `,
                            )
                            .join('')}
                        </div>
                      </article>
                    </div>
                    <div class="card__back">
                      <label for="${labelId}">${labels[2]}</label>
                      <p>${jobs[0].description}</p>
                    </div>
                  </div>
                </article>
              </li>
            `
            })
            .join('')}
        </ul>

        <p class="last-updated">Last updated: ${getFormattedDateWithoutTime()}</p>
      </div>
    </section>
  `

  return experience
}

export default buildExperience
