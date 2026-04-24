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

    const jobs = Object.values(t('infodev.jobs'))

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
          <h3 class="header__subtitle">${t('infodev.subtitle')}</h3>
        </header>
        <main class="infodev__content">
          <header class="content__header">
            <img src="/img/dlr/dlr.png" alt="David Llamas Román" loading="lazy">
            <div class="header__text">
              <h3>David Llamas Román</h3>
              <p>${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}</p>
              <p>${t('infodev.profesional-data.location')}</p>
            </div>
          </header>
          <article class="content">
            <h2>${t('infodev.laboral-experience')}</h2>
            <ul class="jobs__list">
              ${sortedJobs
                .map(
                  (element) => `<li class="list__element">
                <header class="element__header">
                  <infodev-company-icon></infodev-company-icon>
                  <div class="header__text">
                    <h3>${element.title}</h3>
                    <p>${element.company}</p>
                    <p>${element.date}</p>
                  </div>
                </header>
                <p class="element__text">${element.description}</p>
              </li>`,
                )
                .join('')}
            </ul>
          </article>
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
            & h2 {
              font-size: max(20px, 1.25vmax);
              font-weight: 600;
            }

            & h3 {
              font-size: max(16px, 0.9vmax);
              font-weight: 400;
            }
          }

          .infodev__content {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
            gap: 0.5rem;

            .content__header, .content {
              background-color: inherit;

              border-radius: 10px;
              border: 1px solid var(--infodev-light-blue, #498dbb80);
            }

            .content__header {
              display: grid;
              grid-template-rows: 1fr;
              grid-template-columns: 0.15fr 1fr;

              padding: 1rem 1.5rem;

              & img {
                width: clamp(50px, 100%, 80px);
                aspect-ratio: 1/1;

                border-radius: 50%;
              }

              .header__text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: left;
                gap: 0.25rem;

                & h3 {
                  font-size: max(16px, 0.9vmax);
                  font-weight: 600;
                }

                & p {
                  font-size: max(16px, 0.9vmax);
                }
              }
            }
            
            .content {
              & h2 {
                padding: 1rem 1.5rem 0.75rem 1.5rem;

                font-size: max(20px, 1.25vmax);
                font-weight: 600;

                border-bottom: 1px solid var(--infodev-light-blue, #498dbb80)
              }

              .jobs__list {
                display: flex;
                flex-direction: column;
                justify-content: left;
                align-items: left;
                gap: 3em;

                padding: 1rem 1.5rem;

                list-style: none;

                .list__element {
                  display: grid;
                  grid-template-rows: auto 1fr;
                  grid-template-columns: 1fr;

                  .element__header {
                    display: grid;
                    grid-template-rows: 1fr;
                    grid-template-columns: auto 1fr;
                    align-items: top;
                    gap: 1rem;

                    & infodev-company-icon {
                      margin-top: 0.2rem;
                    }

                    .header__text {
                      display: flex;
                      flex-direction: column;
                      align-items: left;
                      justify-content: center;
                      gap: 0.2rem;
                    }
                  }

                  .element__text {
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
