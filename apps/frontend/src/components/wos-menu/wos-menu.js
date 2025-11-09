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

import BaseComponent from '@/components/base-component.js'

class WosMenu extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="wos__menu">
        <article class="search__container">
          <input type="search" name="wos_search" id="wos__search">
        </article>

        <article class="summary__view" data-summary-view>
          <article class="pinned">
            <div class="pinned__header">
              <h5>Pinned</h5>
              <div class="all__button">
                <div>
                  All <span>&gt;</span>
                </div>
              </div>
            </div>
          </article>
          <article class="recommended">
            <h5>Recommended</h5>
          </article>
        </article>

        <article class="full__view" data-full-view>
          <div class="view__header">
            <h5>All</h5>
            <div class="back__button">
              <div>
                <span>&lt;</span> Back
              </div>
            </div>
          </div>
        </article>

        <article class="user__bar">
          <div class="user">
            <div class="user__content">
              <div class="user__icon">
                <div class="user__figure">
                  <div class="user__head"></div>
                  <div class="user__body"></div>
                </div>
              </div>
              <h5>Sign In | Sign Up</h5>
            </div>
          </div>
        </article>
      </article>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        :host {
          position: fixed;
          bottom: 0;
          left: 50%;

          display: grid;
          place-items: center;

          transform: translateX(-50%) translateY(100%);
          transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;

          visibility: hidden;
          opacity: 0;
        }

        :host(.visible) {
          transform: translateX(-50%) translateY(0);

          opacity: 1;
        }

        .wos__menu {
          position: relative;

          display: grid;
          grid-template-rows: auto 1fr auto;

          aspect-ratio: 9/11;
          height: clamp(750px, 75dvh, 1132.5px);

          margin-bottom: max(4rem, 2.9vmax);

          background-color: rgba(41, 41, 41, 0.6);
          backdrop-filter: blur(10px);

          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          -ms-border-radius: 10px;
          -o-border-radius: 10px;

          box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);

          .search__container {
            #wos__search {
              padding: 0.35rem 0.8rem;
              margin: 1.9rem 1.5rem 0.85rem 1.5rem;

              color: #fff;
              background-color: rgba(41, 41, 41, 0.8);

              outline: none;
              border: 1px solid rgba(255, 255, 255, 0.15);
              border-radius: 1rem;
              -webkit-border-radius: 1rem;
              -moz-border-radius: 1rem;
              -ms-border-radius: 1rem;
              -o-border-radius: 1rem;

              box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
            }
          }

          .summary__view {
            display: var(--summary-view);
            grid-template-rows: 1fr 0.45fr;

            .pinned,
            .recommended {
              padding: 1.5rem 2rem 1rem 2rem;
              margin: 0 1.5rem 0 1.5rem;

              & h5 {
                color: #fff;

                text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
              }
            }
            
            .pinned {
              .pinned__header {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .all__button {
                  position: relative;
                  width: fit-content;
                  height: fit-content;

                  display: grid;
                  place-items: center;

                  & div {
                    width: 48.86px;
                    height: 25px;

                    padding: 0.25rem 0.5rem;

                    color: #fff;
                    background-color: rgba(255, 255, 255, 0.05);

                    font-size: 11.5px;

                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 4px;
                    -webkit-border-radius: 4px;
                    -moz-border-radius: 4px;
                    -ms-border-radius: 4px;
                    -o-border-radius: 4px;

                    & span {
                      padding-left: 0.5rem;
                    }
                  }

                  #all__checkbox {
                    position: absolute;

                    width: 48.86px;
                    height: 25px;

                    opacity: 0;

                    cursor: pointer;
                  }
                }
              }
            }
          }
          
          .full__view {
            display: var(--full-view);

            padding: 1.5rem 2rem 1rem 2rem;
            margin: 0 1.5rem 0 1.5rem;

            & h5 {
              color: #fff;

              text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
            }

            .view__header {
              display: flex;
              justify-content: space-between;
              align-items: center;

              .back__button {
                position: relative;
                width: fit-content;
                height: fit-content;

                display: grid;
                place-items: center;

                & div {
                  width: 61.16px;
                  height: 25px;

                  padding: 0.25rem 0.5rem;

                  color: #fff;
                  background-color: rgba(255, 255, 255, 0.05);

                  font-size: 11.5px;

                  border: 1px solid rgba(255, 255, 255, 0.15);
                  border-radius: 4px;
                  -webkit-border-radius: 4px;
                  -moz-border-radius: 4px;
                  -ms-border-radius: 4px;
                  -o-border-radius: 4px;

                  & span {
                    padding-right: 0.5rem;
                  }
                }

                #back__checkbox {
                  position: absolute;

                  width: 61.16px;
                  height: 25px;

                  opacity: 0;

                  cursor: pointer;
                }
              }
            }
          }

          .user__bar {
            padding: 1rem 2.5rem;

            background-color: rgba(0, 0, 0, 0.25);

            border-top: 1px solid rgba(0, 0, 0, 0.1);
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;

            .user {
              position: relative;
              width: fit-content;
              height: fit-content;

              display: grid;
              place-items: center;

              &:hover {
                .user__content {
                  background-color: rgba(255, 255, 255, 0.15);
                }
              }

              .user__content {
                width: 176.8px;
                height: 38px;

                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 0.8rem;

                padding: 0.25rem 0.75rem;

                border-radius: 4px;
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                -ms-border-radius: 4px;
                -o-border-radius: 4px;

                .user__icon {
                  width: 30px;
                  height: 30px;

                  display: grid;
                  place-items: center;

                  background-color: #e6e6e6;

                  border-radius: 50%;
                  -webkit-border-radius: 50%;
                  -moz-border-radius: 50%;
                  -ms-border-radius: 50%;
                  -o-border-radius: 50%;

                  .user__figure {
                    display: grid;
                    place-items: center;
                    gap: 0.135rem;

                    .user__head {
                      width: 10px;
                      height: 10px;

                      background-color: rgba(41, 41, 41, 0.6);

                      border-radius: 50%;
                      -webkit-border-radius: 50%;
                      -moz-border-radius: 50%;
                      -ms-border-radius: 50%;
                      -o-border-radius: 50%;
                    }

                    .user__body {
                      width: 18px;
                      height: 8px;

                      background-color: rgba(41, 41, 41, 0.6);

                      border-radius: 50%;
                      -webkit-border-radius: 50%;
                      -moz-border-radius: 50%;
                      -ms-border-radius: 50%;
                      -o-border-radius: 50%;
                    }
                  }
                }

                & h5 {
                  color: #fff;

                  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                }
              }

              #user__checkbox {
                position: absolute;

                width: 176.8px;
                height: 38px;

                opacity: 0;

                cursor: pointer;
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

    this.addEventListener('transitionend', (event) => {
      if (
        event.propertyName === 'transform' &&
        !this.classList.contains('visible')
      ) {
        this.style.visibility = 'hidden'
      }
    })

    const observer = new MutationObserver(() => {
      if (this.classList.contains('visible')) {
        this.style.visibility = 'visible'
      }
    })
    observer.observe(this, { attributes: true, attributeFilter: ['class'] })
  }
}

customElements.define('wos-menu', WosMenu)
