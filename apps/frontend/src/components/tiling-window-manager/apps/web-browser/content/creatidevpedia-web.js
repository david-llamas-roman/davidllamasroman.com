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

class CreatidevpediaWeb extends BaseComponent {
  constructor() {
    super()

    this._resizeObserver = null
    this.isStaticRoute = false
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="creatidevpedia">
        <header class="creatidevpedia__header">
          <article class="logo">
            <article class="logo__text">
              <h2><span>C</span>REATI<span>D</span>EVPEDIA</h2>
              <p>${t('creatidevpedia-logo')}</p>
            </article>
          </article>
        </header>
        <main class="creatidevpedia__content">
          <header class="content__header">
            <h1 class="title">David Llamas Román</h1>
            <h2 class="subtitle">${t('full-stack-developer')}</h2>
          </header>
          <article class="content">
            <article class="content__text">
              ${t('creatidevpedia-about-me')}
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
        .creatidevpedia {
          display: grid;
          grid-template-rows: auto 1fr;
          grid-template-columns: 1fr;

          width: var(--max-percentage, 100%);
          ${this.isStaticRoute ? 'height: var(--max-percentage, 100%);' : ''}

          padding: 1rem 2rem;

          background-color: var(--creatidevpedia-dark-blue, #121420);

          font-family: 'Montserrat';

          border-bottom-right-radius: 10px;

          text-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);

          ${this.isStaticRoute ? '' : 'overflow-y: auto;'}

          .creatidevpedia__header {
            display: grid;
            place-items: center;

            .logo {
              .logo__text {
                display: grid;
                place-items: center;

                color: var(--creatidevpedia-white, #f8fdfa);

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

          .creatidevpedia__content {
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

              border-bottom: 1px solid var(--light-grey-3, rgba(255, 255, 255, 0.52));

              .title {
                color: var(--creatidevpedia-white, #f8fdfa);

                font-size: max(40px, 2.5vmax);
                font-family: 'EB Garamond';
                font-weight: 400;
              }

              .subtitle {
                color: var(--light-grey-3, rgba(255, 255, 255, 0.52));

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

                  color: var(--creatidevpedia-white, #f8fdfa);

                  text-align: justify;
                  font-size: max(16px, 0.9vmax);

                  & span {
                    color: var(--creatidevpedia-light-blue, #879fe5);

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

                  color: var(--creatidevpedia-white, #f8fdfa);

                  text-align: center;
                  font-size: max(18px, 1.25vmax);
                  font-weight: 600;
                }

                .info {
                  display: grid;
                  grid-template-rows: 1fr auto;
                  grid-template-columns: 1fr;

                  padding: 1rem;

                  border: 1px solid var(--creatidevpedia-white, #f8fdfa);

                  & h4 {
                    padding: 0.5rem;

                    color: var(--creatidevpedia-white, #f8fdfa);

                    text-align: center;

                    border-top: 1px solid var(--light-grey-3, rgba(255, 255, 255, 0.52));
                    border-bottom: 1px solid var(--light-grey-3, rgba(255, 255, 255, 0.52));

                    font-size: max(16px, 0.9vmax);
                  }

                  & article {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    color: var(--creatidevpedia-white, #f8fdfa);

                    border-bottom: 1px solid var(--light-grey-3, rgba(255, 255, 255, 0.52));

                    & h4 {
                      border-top: none;
                      border-bottom: none;
                    }

                    & p {
                      white-space: nowrap;

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

  static get observedAttributes() {
    return ['static-route']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'static-route') {
      this.isStaticRoute = newValue !== null
    }
  }

  connectedCallback() {
    this.render()

    if (this.isStaticRoute) return

    const updateHeight = () => this.setHeightToParent()

    requestAnimationFrame(updateHeight)

    const container = this.shadowRoot.querySelector('.creatidevpedia')
    const parent = this.parentElement
    if (container && parent) {
      this._resizeObserver = new ResizeObserver(updateHeight)
      this._resizeObserver.observe(parent)
    }

    window.addEventListener('resize', updateHeight)
  }

  disconnectedCallback() {
    if (this._resizeObserver) {
      this._resizeObserver.disconnect()
    }
    window.removeEventListener('resize', this.setHeightToParent)
  }

  setHeightToParent() {
    if (this.isStaticRoute) return

    const container = this.shadowRoot.querySelector('.creatidevpedia')
    if (!container) return

    const parent = this.parentElement
    if (!parent) return

    container.style.height = `${parent.clientHeight}px`
  }
}

customElements.define('creatidevpedia-web', CreatidevpediaWeb)
