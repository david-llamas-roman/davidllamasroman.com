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

import BaseComponent from '../../../../base-component.js'
import { getLanguage } from '../../../../../utils/i18n.js'

class WebBrowserContent extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    const isCreatidevpedia = this.hasAttribute('creatidevpedia')
    const isDlrdevacademy = this.hasAttribute('dlrdevacademy')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="browser">
        <header class="browser__header">
          <article class="website__title">
            <p class="title">${isCreatidevpedia ? 'David Llamas Román - CreatiDevpedia' : isDlrdevacademy ? 'Home | DlrDevAcademy' : ''}</p>
          </article>
          <article class="browser__controls">
            <arrows-icon left></arrows-icon>
            <arrows-icon right></arrows-icon>
            <article class="website__url">
              <input type="search" class="url" value="${isCreatidevpedia ? `https://davidllamasroman.com/${getLanguage() === 'en' ? 'en' : 'es'}/creatidevpedia/dev/David_Llamas_Román` : isDlrdevacademy ? `https://davidllamasroman.com/${getLanguage() === 'en' ? 'en' : 'es'}/dlrdevacademy` : ''}" disabled />
            </article>
          </article>
          <article class="browser__bookmarks">
            <bookmarks-icon></bookmarks-icon>
            <nav class="bookmarks">
              <ul class="bookmarks__list">
                <li><button type="button"><creatidevpedia-icon></creatidevpedia-icon> CreatiDevpedia</button></li>
                <li><button type="button"><dlrdevacademy-icon></dlrdevacademy-icon> DlrDevAcademy</button></li>
              </ul>
            </nav>
          </article>
        </header>
        <article class="browser__content">
          <aside class="content__aside">
            <nav class="aside__navbar">
              <ul class="navbar__list">
                ${isCreatidevpedia ? '<li class="list__element"><button type="button"><creatidevpedia-icon></creatidevpedia-icon> DLR - CreatiDevpedia</button></li>' : isDlrdevacademy ? `<li class="list__element"><button type="button"><dlrdevacademy-icon></dlrdevacademy-icon> Home | DlrDevAcademy</button></li>` : ''}
                <li class="list__element border-top"><button type="button"><addition-icon></addition-icon> New Tab <div><span>Space</span><span>T</span></div></button></li>
              </ul>
            </nav>
          </aside>
          ${isCreatidevpedia ? '<creatidevpedia-web></creatidevpedia-web>' : isDlrdevacademy ? '<dlrdevacademy-web></-web>' : ''}
        </article>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .browser {
          display: grid;
          grid-template-rows: auto 1fr;

          width: var(--max-percentage, 100%);
          height: var(--max-percentage, 100%);

          .browser__header {
            display: grid;
            grid-template-rows: auto 1fr;
            grid-template-columns: 1fr;

            background-color: var(--light-grey-2, rgba(255, 255, 255, 0.28));

            border-bottom: 1px solid var(--dark-grey-rgba-2, rgba(35, 35, 40, 0.4));

            .website__title {
              padding: 0.35rem 0.75rem;

              background-color: var(--dark-grey, #232327);

              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
              border-bottom: 1px solid var(--dark-grey-rgba-2, rgba(35, 35, 40, 0.4));

              .title {
                color: var(--white, #fff);

                font-size: max(14px, 0.75vmax);

                text-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);
              }
            }

            .browser__controls {
              display: grid;
              grid-template-rows: 1fr;
              grid-template-columns: auto auto 1fr;
              align-items: center;

              .website__url {
                display: grid;
                grid-template-rows: 1fr;
                grid-template-columns: 1fr;

                margin: 0.35rem 1rem;
                padding: 0.5rem;

                background-color: var(--dark-grey, #232327);

                border-radius: 10px;

                .url {
                  background-color: transparent;
                  color: var(--white, #fff);

                  font-size: max(14px, 0.75vmax);

                  border: none;

                  text-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);
                }
              }
            }

            .browser__bookmarks {
              display: flex;
              align-items: center;
              gap: 0.75rem;

              padding: 0 0.6rem 0.3rem 0.6rem;

              .bookmarks {
                padding-left: 0.75rem;

                border-left: 1px solid var(--black, #000);

                .bookmarks__list {
                  display: flex;
                  align-items: center;
                  gap: 0.5rem;
                  
                  list-style: none;

                  & li {
                    border-radius: 8px;

                    transition: background-color 0.2s;

                    &:hover {
                        background-color: var(--dark-grey-rgba-2, rgba(35, 35, 40, 0.4));
                    }

                    & button {
                      display: flex;
                      align-items: center;
                      gap: 0.5rem;

                      padding: 0.5rem;

                      background-color: transparent;
                      color: var(--white, #fff);

                      border: none;

                      text-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);

                      cursor: pointer;
                    }
                  }
                }
              }
            }
          }

          .browser__content {
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: auto 1fr;

            .content__aside {
              width: max(38px, 1.75vmax);

              padding: 0.5rem 0;

              background-color: var(--light-grey-2, rgba(255, 255, 255, 0.28));

              border-right: 1px solid var(--light-grey-2, rgba(255, 255, 255, 0.28));

              transition: width 0.2s ease;
              overflow: hidden;

              .aside__navbar {
                margin: 0 0.25rem;

                .navbar__list {
                  display: flex;
                  flex-direction: column;
                  gap: 0.25rem;

                  list-style: none;

                  .list__element {
                    display: grid;
                    grid-template-columns: 1fr;

                    white-space: nowrap;

                    & button {
                      display: flex;
                      align-items: center;
                      gap: 0.5rem;

                      padding: 0.25rem 0.3rem;

                      background-color: transparent;
                      color: var(--white, #fff);

                      font-size: max(14px, 0.75vmax);
                      font-family: 'Open Sans';

                      border-radius: 4px;
                      border: none;

                      text-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);

                      cursor: pointer;

                      transition: background-color 0.2s;

                      &:hover {
                        background-color: var(--light-grey-2, rgba(255, 255, 255, 0.28));
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .list__element.border-top {
          margin-top: 0.25rem;
          border-top: 1px solid var(--light-grey-2, rgba(255, 255, 255, 0.28));

          & button {
            margin-top: 0.25rem;

            & div {
              display: flex;
              align-items: center;
              gap: 0.25rem;

              & span {
                padding: 0 0.25rem;

                border-radius: 4px;
                border: 1px solid var(--light-grey-5, rgba(255, 255, 255, 0.18));
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

    const aside = this.shadowRoot.querySelector('.content__aside')
    if (!aside) return

    const collapsedWidthPx = getComputedStyle(aside).width
    aside.style.width = collapsedWidthPx

    const expand = () => {
      const fullWidth = Math.ceil(aside.scrollWidth)
      const extra = 4.5
      aside.style.width = `${fullWidth + extra}px`
    }

    const collapse = () => {
      aside.style.width = collapsedWidthPx
    }

    const onEnter = () => expand()
    const onLeave = () => collapse()

    aside.addEventListener('pointerenter', onEnter)
    aside.addEventListener('pointerleave', onLeave)

    const onResize = () => {
      if (!aside.matches(':hover')) {
        collapse()
      }
    }
    window.addEventListener('resize', onResize)

    this._aside = aside
    this._onEnter = onEnter
    this._onLeave = onLeave
    this._onResize = onResize
  }

  disconnectedCallback() {
    if (this._aside) {
      this._aside.removeEventListener('pointerenter', this._onEnter)
      this._aside.removeEventListener('pointerleave', this._onLeave)
    }

    if (this._onResize) {
      window.removeEventListener('resize', this._onResize)
    }
  }
}

customElements.define('web-browser-content', WebBrowserContent)
