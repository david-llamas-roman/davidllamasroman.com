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

import { t } from '../../../../../utils/i18n.js'
import BaseComponent from '../../../../base-component.js'

class WikipediaWeb extends BaseComponent {
  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="wikipedia">
        <header class="wikipedia__header">
          <article class="logo">
            <article class="logo__text">
              <h2><span>W</span>IKIPEDI<span>A</span></h2>
              <p>${t('wikipedia-logo')}</p>
            </article>
          </article>
        </header>
        <main class="wikipedia__content">
          <header class="content__header">
            <h1 class="title">David Llamas Román</h1>
            <h2 class="subtitle">${t('full-stack-developer')}</h2>
          </header>
          <article class="content">
            <article class="content__text">
              ${t('wikipedia-about-me')}
            </article>
            <article class="info__container">
              <h3>HTML Engineer</h3>
              <article class="info">
                <img src="" alt="David Llamas Román" />
                <section class="biography">
                  <h4>${t('biography')}</h4>
                  <article>
                    <h4>${t('born')}</h4>
                    <p>2005 (${new Date().getFullYear() - 2005 - 1}/${new Date().getFullYear() - 2005})</p>
                  </article>
                  <article>
                    <h4>${t('dream-title')}</h4>
                    <p>${t('dream')}</p>
                  </article>
                  <article>
                    <h4>${t('occupation')}</h4>
                    <p>${t('unicorn')}</p>
                  </article>
                  <article>
                    <h4>${t('spouse-title')}</h4>
                    <p>${t('spouse')}</p>
                  </article>
                </section>
              </article>
            </article>
          </article>
        </main>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .wikipedia {
          display: grid;
          grid-template-rows: auto 1fr;
          grid-template-columns: 1fr;

          width: var(--max-percentage, 100%);
          height: var(--max-percentage, 100%);

          padding: 1rem 2rem;

          background-color: var(--wikipedia-dark-blue, #111218);

          font-family: 'Montserrat';

          border-bottom-right-radius: 10px;

          text-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);

          .wikipedia__header {
            display: grid;
            place-items: center;

            .logo {
              .logo__text {
                display: grid;
                place-items: center;

                color: var(--wikipedia-white, #fcfffe);

                font-family: 'EB Garamond';

                & h2 {
                  font-weight: 100;
                  font-size: max(20px, 1.25vmax);

                  & span {
                    font-size: max(26px, 1.5vmax);
                  }
                }
                
                & p {
                  font-size: max(14px, 0.75vmax);
                }
              }
            }
          }

          .wikipedia__content {
            display: grid;
            grid-template-rows: auto 1fr;
            grid-template-columns: 1fr;
            gap: 1rem;

            margin-top: 1rem;

            .content__header {
              display: flex;
              justify-content: space-between;
              align-items: end;

              padding: 0.5rem 0;

              border-bottom: 1px solid var(--light-grey-3, rgba(255, 255, 255, 0.5));

              .title {
                color: var(--wikipedia-white, #fcfffe);

                font-size: max(40px, 2.5vmax);
                font-family: 'EB Garamond';
                font-weight: 400;
              }

              .subtitle {
                color: var(--light-grey-3, rgba(255, 255, 255, 0.5));

                font-size: max(20px, 1.25vmax);
                font-weight: 300;
              }
            }

            .content {
              display: grid;
              grid-template-rows: auto;
              grid-template-columns: auto 1fr;

              .content__text {
                padding-right: 4rem;

                & p {
                  padding: 0.25rem 0;

                  color: var(--wikipedia-white, #fcfffe);

                  text-align: justify;
                  font-size: max(16px, 0.9vmax);

                  & span {
                    color: var(--wikipedia-light-blue, #7f99dd);

                    font-style: italic;
                  }
                }
              }

              .info__container {
                display: grid;
                grid-template-rows: auto 1fr;
                grid-template-columns: 1fr;

                background-color: var(--dark-grey, #1f1f23);

                aspect-ratio: 9/16;

                & h3 {
                  padding: 0.35rem;

                  color: var(--wikipedia-white, #fcfffe);

                  text-align: center;
                  font-size: max(18px, 1.25vmax);
                  font-weight: 600;
                }

                .info {
                  display: grid;
                  grid-template-rows: 1fr auto;
                  grid-template-columns: 1fr;

                  padding: 1rem;

                  border: 1px solid var(--wikipedia-white, #fcfffe);

                  & h4 {
                    padding: 0.5rem;

                    color: var(--wikipedia-white, #fcfffe);

                    text-align: center;

                    border-top: 1px solid var(--light-grey-3, rgba(255, 255, 255, 0.5));
                    border-bottom: 1px solid var(--light-grey-3, rgba(255, 255, 255, 0.5));

                    font-size: max(16px, 0.9vmax);
                  }

                  & article {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    color: var(--wikipedia-white, #fcfffe);

                    border-bottom: 1px solid var(--light-grey-3, rgba(255, 255, 255, 0.5));

                    & h4 {
                      border-top: none;
                      border-bottom: none;
                    }

                    & p {
                      font-size: max(16px, 0.75vmax);
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
    const sheets = this.shadowRoot.adoptedStyleSheets

    this.shadowRoot.replaceChildren()

    this.shadowRoot.adoptedStyleSheets = sheets

    this.shadowRoot.appendChild(this.#getTemplate().content.cloneNode(true))
  }

  connectedCallback() {
    this.render()
  }
}

customElements.define('wikipedia-web', WikipediaWeb)
