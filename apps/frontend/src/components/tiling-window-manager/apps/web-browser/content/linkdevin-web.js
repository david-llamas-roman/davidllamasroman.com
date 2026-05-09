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

import FullHeight from '@/components/tiling-window-manager/apps/web-browser/content/full-height.js'
import { t } from '@/utils/i18n.js'

class LinkDevInWeb extends FullHeight {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    const notRegulatedCourses = Object.values(
      t('certifications.courses.not-regulated'),
    )

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

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="linkdevin">
        <header class="linkdevin__header">
          <div class="header__media">
            <div class="media__banner"></div>

            <figure class="media__profile-photo">
              <img src="/img/dlr/dlr.png" alt="David Llamas Román" class="profile-photo" loading="lazy">
            </figure>
          </div>

          <div class="header__info">
            <p>David Llamas Román</p>
            <p>${t('the-system.websites.linkdevin.headline')}</p>
            <p>${t('the-system.websites.linkdevin.location')}</p>
          </div>
        </header>

        <main class="linkdevin__content">

          <section class="certifications">
            <h1 class="certifications__title">${t('the-system.websites.linkdevin.title')}</h1>

            <ul class="certifications__list">
              ${sortedCourses
                .map((certification) => {
                  const company = certification.company

                  return `
                  <li class="certification">
                    <article class="certification__item">
                      <div class="item__logo" ${company}>${company.split('')[0].toUpperCase()}</div>

                      <div class="item__data">
                        <header class="data__header">
                          <h2>${certification.title}</h2>
                          <p>${company.charAt(0).toUpperCase() + company.slice(1).toLowerCase()}</p>
                          <p>${t('the-system.websites.linkdevin.issued')} ${certification.issued}</p>
                        </header>

                        <a href="${certification.url}" target="_blank" class="show-certificate__btn">${t('the-system.websites.linkdevin.show-credential')}</a>

                        <ul class="skills">
                          ${Object.values(certification.skills)
                            .map(
                              (skill) => `
                              <li class="skill">${skill}</li>
                            `,
                            )
                            .join('')}
                        </ul>
                      </div>
                    </article>
                  </li>
                `
                })
                .join('')}
            </ul>
          </section>

        </main>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .linkdevin {
          width: var(--max-percentage, 100%);
          ${this.isStaticRoute ? 'height: var(--max-percentage, 100%);' : ''}

          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr;
          gap: 0.3rem;

          background-color: var(--linkdevin-black, #010100);

          ${this.isStaticRoute ? '' : 'overflow-y: auto;'}

          .linkdevin__header {
            width: fit-content;

            margin: 1.5rem auto 0 auto;

            background-color: var(--linkdevin-grey, #1a1f23);

            border: 1px solid var(--linkdevin-grey, #1a1f23);
            border-radius: 1rem;

            .header__media {
              position: relative;

              width: clamp(820px, 50dvw, 1400px);

              margin-bottom: 5.5rem;

              .media__banner {
                width: 100%;
                aspect-ratio: 2559/689;

                background-image: url("/img/dlr/dlr-banner.png");
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;

                border-radius: 1rem;
              }

              .media__profile-photo {
                & img {
                  position: absolute;
                  left: 2rem;
                  bottom: -3.8rem;

                  width: clamp(150px, 10dvw, 275px);
                  aspect-ratio: 1/1;

                  border: 4px solid var(--linkdevin-black, #010100);
                  border-radius: 50%;
                }
              }
            }

            .header__info {
              display: flex;
              flex-direction: column;
              gap: 0.25rem;

              padding: 0 1.8rem 1.5rem 1.8rem;

              & p {
                color: var(--white, #fff);

                font-size: max(16px, 0.9vmax);
                font-family: 'Montserrat';

                &:nth-child(1) {
                  font-size: max(20px, 1.25vmax);
                  font-weight: 700;
                }

                &:nth-child(3) {
                  color: var(--linkdevin-light-grey, #8d8f95);

                  font-size: max(14px, 0.75vmax);
                }
              }
            }
          }

          .linkdevin__content {
            width: clamp(820px, 50dvw, 1400px);

            padding-bottom: 1.5rem;
            margin: 0 auto;

            .certifications {
              padding: 1.5rem 1.8rem;

              background-color: var(--linkdevin-grey, #1a1f23);

              border-radius: 1rem;

              .certifications__title {
                color: var(--white, #fff);
                font-family: 'Montserrat';
                font-size: max(20px, 1.25vmax);
                font-weight: 600;
              }

              .certifications__list {
                list-style: none;

                .certification {
                  padding: 2rem 0;

                  border-bottom: 1px solid var(--linkdevin-light-grey, #8d8f95);

                  .certification__item {
                    display: grid;
                    grid-template-areas: 'logo data';
                    grid-template-columns: auto 1fr;
                    gap: 1rem;

                    .item__logo {
                      grid-area: logo;

                      display: grid;
                      place-items: center;

                      width: 50px;
                      aspect-ratio: 1/1;

                      color: var(--white, #fff);

                      font-family: 'Montserrat';
                      font-size: max(16px, 0.9vmax);
                      font-weight: 400;

                      border-radius: 4px;

                      &[cambridge] {
                        background-color: var(--linkdevin-red, #d50032);
                      }

                      &[udemy] {
                        background-color: var(--dlrdevacademy-purple, #7c3aed);
                      }

                      &[platzi] {
                        background-color: var(--linkdevin-green, #1fbf78);
                      }

                      &[mastermind] {
                        background-color: var(--linkdevin-rose, #e60073);
                      }

                      &[openwebinars] {
                        background-image: var(--linkdevin-rose-purple, radial-gradient(circle at top left, #b80b92 0%, #5f1fc2 100%));
                      }
                    }

                    .item__data {
                      grid-area: data;

                      display: flex;
                      flex-direction: column;
                      gap: 1rem;

                      .data__header {
                        display: flex;
                        flex-direction: column;
                        gap: 0.15rem;

                        & h2, p {
                          color: var(--white, #fff);

                          font-family: 'Montserrat';
                        }

                        & h2 {
                          font-size: max(16px, 0.9vmax);
                        }

                        & p {
                          font-size: max(14px, 0.75vmax);

                          &:nth-child(3) {
                            color: var(--linkdevin-light-grey, #8d8f95);
                          }
                        }
                      }

                      .show-certificate__btn {
                        width: fit-content;

                        padding: 0.25rem 0.5rem;

                        color: var(--linkdevin-light-grey, #8d8f95);

                        font-family: 'Montserrat';
                        font-size: max(14px, 0.75vmax);
                        text-decoration: none;

                        border: 1px solid var(--linkdevin-light-grey, #8d8f95);
                        border-radius: 1rem;

                        transition: color 0.2s, border 0.2s;

                        &:hover {
                          color: var(--white, #fff);
                          border-color: var(--white, #fff);
                        }
                      }

                      .skills {
                        display: flex;
                        gap: 0.5rem;

                        padding-top: 0.25rem;

                        list-style: none;

                        .skill {
                          padding: 0.25rem 0.5rem;

                          color: var(--linkdevin-grey, #1a1f23);
                          background-color: var(--white, #fff);

                          font-family: 'Montserrat';
                          font-size: max(14px, 0.75vmax);

                          border-radius: 4px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      </style>
    `
  }

  render() {
    const sheets = this.shadowRoot.adoptedStylesSheets

    this.shadowRoot.replaceChildren()

    this.shadowRoot.adoptedStylesSheets = sheets

    this.shadowRoot.appendChild(this.#getTemplate().content.cloneNode(true))
  }

  connectedCallback() {
    this.render()

    super.connectedCallback()
  }

  getTargetElement() {
    return this.shadowRoot.querySelector('.linkdevin')
  }
}

customElements.define('linkdevin-web', LinkDevInWeb)
