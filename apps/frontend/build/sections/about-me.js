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

const buildAboutMe = (lang) => {
  const aboutMeTitle = translations[lang]['about-me'].title
  const slideParagraphs = Object.values(
    translations[lang]['about-me'].slides.paragraphs,
  )
  const slideImages = Object.values(
    translations[lang]['about-me'].slides.images,
  )
  const imagesAltAttributes = Object.values(
    translations[lang]['about-me'].slides.imagesAltAttributes,
  )

  const textParagraphs = translations[lang]['about-me'].text.paragraphs
  const textImages = translations[lang]['about-me'].text.images
  const textImagesAltAttributes =
    translations[lang]['about-me'].text.imagesAltAttributes

  const keys = Object.keys(textParagraphs)
    .map(Number)
    .sort((a, b) => a - b)

  const imageRules = {
    1: true,
    2: true,
    3: true,
    4: false,
    5: true,
    6: false,
  }

  const imageMap = {
    1: 1,
    2: 2,
    3: 3,
    5: 4,
  }

  const aboutMe = `
    <section class="section" id="about-me">
      <h2 class="section__title">${aboutMeTitle}</h2>
      <div class="section__content">
        <article class="article carrousel">
          <div class="slides">
            ${slideParagraphs.map(
              (paragraph, index) => `
              <article class="slide">
                <p>${paragraph}</p>
                <img src="${slideImages[index]}" loading="lazy" alt="${imagesAltAttributes[index]}">
              </article>
            `,
            )}
          </div>
        </article>

        ${keys
          .map((key) => {
            const paragraph = textParagraphs[key]
            const hasImage = imageRules[key]

            if (typeof paragraph === 'string') {
              const mappedKey = imageMap[key]
              const image = mappedKey ? textImages[mappedKey] : null
              const alt = mappedKey ? textImagesAltAttributes[mappedKey] : null

              const imageOnTop = key === 5

              let imageHtml = ''

              if (hasImage) {
                if (typeof image === 'string') {
                  imageHtml = `<img src="${image}" loading="lazy" alt="${alt}">`
                }

                if (typeof image === 'object') {
                  const subKeys = Object.keys(image)
                    .map(Number)
                    .sort((a, b) => a - b)

                  imageHtml = subKeys
                    .map(
                      (subKey) =>
                        `<img src="${image[subKey]}" loading="lazy" alt="${alt[subKey]}">`,
                    )
                    .join('')
                }
              }

              return `
                <article class="article">
                  ${imageOnTop ? imageHtml : ''}
                  <p>${paragraph}</p>
                  ${!imageOnTop ? imageHtml : ''}
                </article>
              `
            }

            if (typeof paragraph === 'object') {
              const subKeys = Object.keys(paragraph)
                .map(Number)
                .sort((a, b) => a - b)

              const subImages = textImages[key] || {}
              const subAlts = textImagesAltAttributes[key] || {}

              return `
              <article class="article">
                ${subKeys
                  .map((subKey) => {
                    const img = hasImage && subImages ? subImages[subKey] : null
                    const imgAlt = hasImage && subAlts ? subAlts[subKey] : null

                    return `
                      <p>${paragraph[subKey]}</p>
                      ${
                        img
                          ? `<img src="${img}" loading="lazy" alt="${imgAlt}">`
                          : ''
                      }
                    `
                  })
                  .join('')}
              </article>
            `
            }

            return ''
          })
          .join('')}

        <p class="last-updated">Last updated: ${getFormattedDateWithoutTime()}</p>
      </div>
    </section>
  `

  return aboutMe
}

export default buildAboutMe
