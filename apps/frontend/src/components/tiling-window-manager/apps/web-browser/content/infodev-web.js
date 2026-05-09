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

import { t } from '@/utils/i18n.js'
import FullHeight from '@/components/tiling-window-manager/apps/web-browser/content/full-height'

class InfoDevWeb extends FullHeight {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    const currentDate = new Date()

    const jobs = Object.values(t('experience.jobs'))

    const sortedJobs = jobs.toSorted((a, b) => {
      const getEndDate = (job) => {
        if (
          job.date.toLowerCase().includes('present') ||
          job.date.toLowerCase().includes('presente')
        ) {
          return new Date()
        }

        const endYear = job.date.split(' ')[4]?.trim()
        return new Date(endYear)
      }

      return getEndDate(b) - getEndDate(a)
    })

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="infodev">
        <header class="infodev__header">
          <h2 class="header__title">David</h2>
          <p class="header__subtitle">${t('the-system.websites.infodev.subtitle')}</p>
        </header>

        <main class="infodev__content">

          <section class="profile">
            <header class="profile__header">
              <figure class="profile__avatar">
                <img src="/img/dlr/dlr.png" alt="David Llamas Román" loading="lazy">
              </figure>

              <div class="profile__info">
                <h2 class="profile__name">David Llamas Román</h2>

                <time class="profile__date" datetime="${currentDate.toISOString()}">
                  ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}
                </time>

                <p class="profile__location">${t('the-system.websites.infodev.profesional-data.location')}</p>
              </div>
            </header>
          </section>

          <section class="experience">
            <header class="experience__header">
              <h1>${t('the-system.websites.infodev.laboral-experience')}</h1>
            </header>

            <ul class="jobs__list">
              ${sortedJobs
                .map(
                  (element) => `
                  <li class="job">
                    <article class="job__item">
                      <header class="job__header">
                        <infodev-company-icon></infodev-company-icon>

                        <div class="job__info">
                          <h3>${element.title}</h3>
                          <p>${element.company}</p>
                          <time>${element.date}</time>
                        </div>
                      </header>

                      <p class="job__description">${element.description}</p>
                    </article>
                  </li>
                `,
                )
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
        .infodev {
          display: grid;
          grid-template-rows: auto 1fr;
          grid-template-columns: 1fr;
          gap: 1rem;

          width: var(--max-percentage, 100%);
          ${this.isStaticRoute ? 'height: var(--max-percentage, 100%);' : ''}

          padding: 2rem;

          color: var(--white, #fff);
          background-color: var(--infodev-dark-grey, #2c2c2c);

          font-family: 'Montserrat';

          border-bottom-right-radius: 10px;

          ${this.isStaticRoute ? '' : 'overflow-y: auto;'}

          .infodev__header, .infodev__content {
            max-width: 800px;
            width: var(--max-percentage, 100%);

            margin: 0 auto;
          }

          .infodev__header {
            .header__title {
              font-size: max(20px, 1.25vmax);
              font-weight: 600;
            }

            .header__subtitle {
              font-size: max(16px, 0.9vmax);
              font-weight: 400;
            }
          }

          .infodev__content {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
            gap: 0.5rem;

            .profile__header, .experience {
              background-color: inherit;

              border-radius: 10px;
              border: 1px solid var(--infodev-light-blue, #498dbb80);
            }

            .profile__header {
              display: grid;
              grid-template-rows: 1fr;
              grid-template-columns: 0.15fr 1fr;

              padding: 1rem 1.5rem;

              .profile__avatar {
                  & img {
                  width: clamp(50px, 100%, 80px);
                  aspect-ratio: 1/1;

                  border-radius: 50%;
                }
              }

              .profile__info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: left;
                gap: 0.25rem;

                .profile__name {
                  font-size: max(16px, 0.9vmax);
                  font-weight: 600;
                }

                .profile__date, .profile__location {
                  font-size: max(16px, 0.9vmax);
                }
              }
            }
            
            .experience {
              .experience__header {
                & h1 {
                  padding: 1rem 1.5rem 0.75rem 1.5rem;

                  font-size: max(20px, 1.25vmax);
                  font-weight: 600;

                  border-bottom: 1px solid var(--infodev-light-blue, #498dbb80)
                }
              }

              .jobs__list {
                display: flex;
                flex-direction: column;
                justify-content: left;
                align-items: left;
                gap: 3em;

                padding: 1rem 1.5rem;

                list-style: none;

                .job {
                  display: grid;
                  grid-template-rows: auto 1fr;
                  grid-template-columns: 1fr;

                  .job__item {
                    .job__header {
                      display: grid;
                      grid-template-rows: 1fr;
                      grid-template-columns: auto 1fr;
                      align-items: top;
                      gap: 1rem;

                      & infodev-company-icon {
                        margin-top: 0.2rem;
                      }

                      .job__info {
                        display: flex;
                        flex-direction: column;
                        align-items: left;
                        justify-content: center;
                        gap: 0.2rem;
                      }
                    }

                    .job__description {
                      padding: 1rem;
                      margin-top: 0.75rem;

                      white-space: pre-wrap;

                      border-radius: 6px;
                      border: 1px solid var(--light-grey-2, rgba(255, 255, 255, 0.28));
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
    return this.shadowRoot.querySelector('.infodev')
  }
}

customElements.define('infodev-web', InfoDevWeb)
