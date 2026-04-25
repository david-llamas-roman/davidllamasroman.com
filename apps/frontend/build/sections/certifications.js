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

import { getFormattedDateWithoutTime } from '../../src/utils/formatters.js'
import { translations } from '../../src/utils/i18n.js'
import { parseDate } from './experience.js'

const buildCertifications = (lang) => {
  const title = translations[lang].certifications.title
  const filters = Object.values(translations[lang].certifications.filters)
  const anchorTitle = translations[lang].certifications['anchor-title']
  const labels = translations[lang].certifications.labels
  const notRegulatedCourses = Object.values(
    translations[lang].certifications.courses['not-regulated'],
  )

  const companyCounters = {}

  const companyOrder = [
    'cambridge',
    'udemy',
    'platzi',
    'mastermind',
    'openwebinars',
  ]

  const sortedCourses = notRegulatedCourses.toSorted((a, b) => {
    const companyA = a.company
    const companyB = b.company

    const orderA = companyOrder.indexOf(companyA)
    const orderB = companyOrder.indexOf(companyB)

    if (orderA !== orderB) {
      return orderA - orderB
    }

    return parseDate(b.date) - parseDate(a.date)
  })

  const certifications = `
    <section class="section" id="certifications">
      <h2 class="section__title">${title}</h2>
      <div class="section__content">
        <nav class="filters">
          <input type="radio" name="training__filters" id="cambridge__training" hidden>
          <input type="radio" name="training__filters" id="platzi__training" hidden>
          <input type="radio" name="training__filters" id="udemy__training" hidden>
          <input type="radio" name="training__filters" id="mastermind__training" hidden>
          <input type="radio" name="training__filters" id="openwebinars__training" hidden>

          <ul class="filters__list">
            ${filters.map((filter) => `<li><label for="${filter.toLowerCase()}__training">${filter}</label></li>`)}
          </ul>
        </nav>

        <div class="certifications__grid">
          ${sortedCourses
            .map((course) => {
              if (!companyCounters[course.company]) {
                companyCounters[course.company] = 0
              }

              companyCounters[course.company]++

              const count = companyCounters[course.company]

              return `
              <article class="card" data-${course.company}>
                <input type="checkbox" id="flip-${course.company}-${count}" class="card__toggle" hidden>
                <div class="card__inner">
                  <div class="card__front">
                    <div>
                      <h3>${course.title}</h3>
                      <h4>${course.subtitle}</h4>
                    </div>
                    <a href="${course.url}" target="_blank">${anchorTitle}</a>
                    <label for="flip-${course.company}-${count}">${labels[1]}</label>
                  </div>
                  <div class="card__back">
                    <label for="flip-${course.company}-${count}">${labels[2]}</label>
                    <ul>
                      ${Object.values(course.skills)
                        .map((skill) => `<li><p>${skill}</p></li>`)
                        .join('')}
                    </ul>
                  </div>
                </div>
              </article>
            `
            })
            .join('')}
        </div>

        <p class="last-updated">Last updated: ${getFormattedDateWithoutTime()}</p>
      </div>
    </section>
  `

  return certifications
}

export default buildCertifications
