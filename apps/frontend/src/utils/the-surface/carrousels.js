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

// indicators - about me carrousel
function initAboutMeCarrousel() {
  const aboutMeCarrousel = document.querySelector('#about-me .carrousel')
  if (!aboutMeCarrousel) return

  const aboutMeIndicatorsContainer = document.createElement('article')
  aboutMeIndicatorsContainer.classList.add('indicators')

  const aboutMeSlides = aboutMeCarrousel.querySelectorAll('.slides .slide')
  const aboutMeSlidesCount = aboutMeSlides.length

  for (let i = 0; i < aboutMeSlidesCount; i++) {
    const span = document.createElement('span')

    aboutMeIndicatorsContainer.appendChild(span)
  }

  aboutMeCarrousel.appendChild(aboutMeIndicatorsContainer)

  const aboutMeSlidesContainer = aboutMeCarrousel.querySelector('.slides')
  const aboutMeIndicators = aboutMeIndicatorsContainer.querySelectorAll('span')

  function updateAboutMeActiveIndicator() {
    const scrollLeft = aboutMeSlidesContainer.scrollLeft
    const containerWidth = aboutMeSlidesContainer.offsetWidth

    let activeIndex = 0
    aboutMeSlides.forEach((slide, index) => {
      const slideLeft = slide.offsetLeft
      const slideCenter = slideLeft + slide.offsetWidth / 2
      const containerCenter = scrollLeft + containerWidth / 2

      if (Math.abs(containerCenter - slideCenter) < slide.offsetWidth / 2) {
        activeIndex = index
      }
    })

    aboutMeIndicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === activeIndex)
    })
  }

  aboutMeSlidesContainer.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateAboutMeActiveIndicator)
  })

  aboutMeIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      const targetSlide = aboutMeSlides[index]

      aboutMeSlidesContainer.scrollTo({
        left: targetSlide.offsetLeft,
        behavior: 'smooth',
      })

      aboutMeIndicators.forEach((indicator) =>
        indicator.classList.remove('active'),
      )
      indicator.classList.add('active')
    })
  })

  aboutMeIndicators[0].classList.add('active')
}

// indicators - experience carrousel
function initExperienceCarrousels() {
  const experienceCarrousels = document.querySelectorAll(
    '#experience .card__list .list__element .card .carrousel',
  )
  if (!experienceCarrousels) return

  experienceCarrousels.forEach((experienceCarrousel) => {
    const experienceIndicatorsContainer = document.createElement('article')
    experienceIndicatorsContainer.classList.add('indicators')

    const experienceSlides =
      experienceCarrousel.querySelectorAll('.slides .slide')
    const experienceSlidesCount = experienceSlides.length

    for (let i = 0; i < experienceSlidesCount; i++) {
      const span = document.createElement('span')

      experienceIndicatorsContainer.appendChild(span)
    }

    experienceCarrousel.appendChild(experienceIndicatorsContainer)

    const experienceSlidesContainer =
      experienceCarrousel.querySelector('.slides')
    const experienceIndicators =
      experienceIndicatorsContainer.querySelectorAll('span')

    function updateExperienceActiveIndicator() {
      const scrollLeft = experienceSlidesContainer.scrollLeft
      const containerWidth = experienceSlidesContainer.offsetWidth

      let activeIndex = 0
      experienceSlides.forEach((slide, index) => {
        const slideLeft = slide.offsetLeft
        const slideCenter = slideLeft + slide.offsetWidth / 2
        const containerCenter = scrollLeft + containerWidth / 2

        if (Math.abs(containerCenter - slideCenter) < slide.offsetWidth / 2) {
          activeIndex = index
        }
      })

      experienceIndicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === activeIndex)
      })
    }

    experienceSlidesContainer.addEventListener('scroll', () => {
      window.requestAnimationFrame(updateExperienceActiveIndicator)
    })

    experienceIndicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        const targetSlide = experienceSlides[index]

        experienceSlidesContainer.scrollTo({
          left: targetSlide.offsetLeft,
          behavior: 'smooth',
        })

        experienceIndicators.forEach((indicator) =>
          indicator.classList.remove('active'),
        )
        indicator.classList.add('active')
      })
    })

    experienceIndicators[0].classList.add('active')
  })
}

export { initAboutMeCarrousel, initExperienceCarrousels }
