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

    this.tabs = []
    this.currentTabIndex = 0
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
              <url-info-icon></url-info-icon>
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
                <li class="separator"></li>
                <li class="list__element border-top"><button type="button"><addition-icon></addition-icon><span class="tab-text">New Tab <div><span>Space</span><span>T</span></span></div></button></li>
              </ul>
            </nav>
          </aside>
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
                grid-template-columns: auto 1fr;
                gap: 0.85rem;
                align-items: center;

                margin: 0.35rem 1rem;
                padding: 0.35rem 0.5rem;

                background-color: var(--dark-grey, #232327);

                border-radius: 10px;

                .url {
                  background-color: transparent;
                  color: var(--light-grey-4, rgba(255, 255, 255, 0.78));

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

                      font-size: max(14px, 0.75vmax);

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

              padding: 0.25rem 0;

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

                  .separator {
                    border-top: 1px solid var(--light-grey-2, rgba(255, 255, 255, 0.28));
                  }

                  .list__element {
                    position: relative;

                    display: grid;
                    grid-template-columns: 1fr auto;
                    grid-template-rows: 1fr;
                    align-items: center;

                    padding-right: 1.9rem;

                    white-space: nowrap;

                    border-radius: 4px;

                    &:hover {
                      background-color: var(--light-grey-2, rgba(255, 255, 255, 0.28));
                    }

                    & close-tab-icon {
                      position: absolute;
                      right: 2.5px;
                    }

                    & button {
                      display: flex;
                      align-items: center;
                      gap: 0.5rem;

                      padding: 0.25rem 0.3rem;

                      background-color: transparent;
                      color: var(--white, #fff);

                      font-size: max(14px, 0.75vmax);
                      font-family: 'Open Sans';

                      border: none;

                      text-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.6);

                      cursor: pointer;

                      transition: background-color 0.2s;

                      .tab-text {
                        padding-right: 1.5rem;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .list__element.border-top {
          & button {
            & div {
              display: flex;
              align-items: center;
              gap: 0.25rem;

              margin-left: 1rem;

              & span {
                padding: 0 0.25rem;

                border-radius: 4px;
                border: 1px solid var(--light-grey-5, rgba(255, 255, 255, 0.18));
              }
            }
          }
        }

        .content__aside .list__element .tab-text {
          display: none;
        }

        .content__aside .list__element close-tab-icon {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
        }

        .content__aside:hover .list__element .tab-text {
          display: inline-flex;
        }

        .content__aside:hover .list__element close-tab-icon {
          opacity: 1;
          pointer-events: auto;
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

    if (this.tabs.length === 0) {
      const lang = getLanguage() === 'en' ? 'en' : 'es'
      const initialUrl = this.hasAttribute('creatidevpedia')
        ? `https://davidllamasroman.com/${lang}/creatidevpedia/dev/David_Llamas_Román`
        : this.hasAttribute('dlrdevacademy')
          ? `https://davidllamasroman.com/${lang}/dlrdevacademy`
          : 'browser://newtab'

      this.#newTab(initialUrl)
    }

    this.shadowRoot
      .querySelector('.list__element.border-top button')
      .addEventListener('click', () => {
        this.#newTab()
        this.#renderTabs()
      })

    this.shadowRoot
      .querySelectorAll('.bookmarks__list button')
      .forEach((btn) => {
        btn.addEventListener('click', () => {
          const lang = getLanguage() === 'en' ? 'en' : 'es'
          const url = btn.textContent.includes('CreatiDevpedia')
            ? `https://davidllamasroman.com/${lang}/creatidevpedia/dev/David_Llamas_Román`
            : `https://davidllamasroman.com/${lang}/dlrdevacademy`
          this.#goTo(url)
        })
      })

    const arrows = this.shadowRoot.querySelectorAll('arrows-icon')
    arrows.forEach((arrow) => {
      arrow.addEventListener('click', () => {
        if (arrow.hasAttribute('left')) this.#navigate(-1)
        else if (arrow.hasAttribute('right')) this.#navigate(1)
      })
    })
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

  #newTab(url = 'browser://newtab') {
    const newTab = {
      id: this.tabs.length,
      title: { icon: 'new-tab-icon', text: 'New Tab' },
      history: url ? [url] : [],
      currentIndex: url ? 0 : -1,
    }

    if (url) {
      if (url.includes('creatidevpedia')) {
        newTab.title = {
          icon: 'creatidevpedia-icon',
          text: 'DLR - CreatiDevpedia',
        }
      } else if (url.includes('dlrdevacademy')) {
        newTab.title = {
          icon: 'dlrdevacademy-icon',
          text: 'Home | DlrDevAcademy',
        }
      } else {
        newTab.title = { icon: 'new-tab-icon', text: 'New Tab' }
      }
    }

    this.tabs.push(newTab)
    this.currentTabIndex = this.tabs.length - 1

    this.#renderCurrentTab()
    this.#renderTabs()
  }

  #renderTabs() {
    const list = this.shadowRoot.querySelector('.navbar__list')
    if (!list) return

    list
      .querySelectorAll('.list__element:not(.border-top)')
      .forEach((el) => el.remove())

    this.tabs.forEach((tab, index) => {
      const li = document.createElement('li')
      li.classList.add('list__element')

      const btn = document.createElement('button')

      if (tab.title?.icon) {
        const iconEl = document.createElement(tab.title.icon)

        if (tab.title.icon === 'dlrdevacademy-icon') {
          iconEl.setAttribute('simplified', '')
        }

        btn.appendChild(iconEl)
      }

      const textSpan = document.createElement('span')
      textSpan.className = 'tab-text'
      textSpan.textContent = tab.title?.text || `Tab ${index + 1}`
      btn.appendChild(textSpan)

      if (index === this.currentTabIndex) {
        li.style.backgroundColor = 'rgba(255, 255, 255, 0.18)'
      }

      btn.addEventListener('click', () => {
        this.currentTabIndex = index
        this.#renderCurrentTab()
        this.#renderTabs()
      })

      li.appendChild(btn)

      const closeIcon = document.createElement('close-tab-icon')
      li.appendChild(closeIcon)
      closeIcon.addEventListener('click', (e) => {
        e.stopPropagation()
        this.tabs.splice(index, 1)

        if (this.tabs.length === 0) {
          this.dispatchEvent(
            new CustomEvent('empty-browser', { bubbles: true, composed: true }),
          )
          return
        }

        if (this.currentTabIndex >= this.tabs.length) {
          this.currentTabIndex = this.tabs.length - 1
        }

        this.#renderTabs()
        this.#renderCurrentTab()
      })

      list.insertBefore(li, list.querySelector('.separator'))
    })
  }

  #renderCurrentTab() {
    const currentTab = this.tabs[this.currentTabIndex]
    if (!currentTab) return

    const contentArea = this.shadowRoot.querySelector('.browser__content')
    const urlInput = this.shadowRoot.querySelector('.website__url .url')
    const titleElement = this.shadowRoot.querySelector('.website__title .title')

    const currentUrl = currentTab.history[currentTab.currentIndex] || ''
    if (urlInput) urlInput.value = currentUrl

    const { headerTitle } = this.#updateHeaderFromUrl(currentUrl)
    if (titleElement) titleElement.textContent = headerTitle

    let currentContent = contentArea.querySelector(`[data-url="${currentUrl}"]`)

    if (!currentContent) {
      currentContent = this.#createContentElementFromUrl(currentUrl)
      currentContent.setAttribute('data-url', currentUrl)
      contentArea.appendChild(currentContent)
    }

    contentArea
      .querySelectorAll(
        'creatidevpedia-web, dlrdevacademy-web, new-tab, div[data-url]',
      )
      .forEach((el) => {
        if (el.getAttribute('data-url') === currentUrl) {
          el.style.display = 'block'
        } else if (!el.classList.contains('content__aside')) {
          el.style.display = 'none'
        }
      })

    this.#updateArrows()
  }

  #goTo(url) {
    const currentTab = this.tabs[this.currentTabIndex]
    if (!currentTab) return

    currentTab.history = currentTab.history.slice(
      0,
      currentTab.currentIndex + 1,
    )
    currentTab.history.push(url)
    currentTab.currentIndex = currentTab.history.length - 1

    if (url.includes('creatidevpedia')) {
      currentTab.title = {
        icon: 'creatidevpedia-icon',
        text: 'DLR - CreatiDevpedia',
      }
    } else if (url.includes('dlrdevacademy')) {
      currentTab.title = {
        icon: 'dlrdevacademy-icon',
        text: 'Home | DlrDevAcademy',
      }
    } else {
      currentTab.title = { icon: null, text: 'New Tab' }
    }

    this.#renderCurrentTab()
    this.#renderTabs()
  }

  #navigate(offset) {
    const currentTab = this.tabs[this.currentTabIndex]
    if (!currentTab) return

    const newIndex = currentTab.currentIndex + offset
    if (newIndex < 0 || newIndex >= currentTab.history.length) return

    currentTab.currentIndex = newIndex

    const currentUrl = currentTab.history[currentTab.currentIndex]
    if (currentUrl.includes('creatidevpedia')) {
      currentTab.title = {
        icon: 'creatidevpedia-icon',
        text: 'DLR - CreatiDevpedia',
      }
    } else if (currentUrl.includes('dlrdevacademy')) {
      currentTab.title = {
        icon: 'dlrdevacademy-icon',
        text: 'Home | DlrDevAcademy',
      }
    } else {
      currentTab.title = { icon: null, text: 'New Tab' }
    }

    this.#renderCurrentTab()
    this.#renderTabs()
  }

  #updateHeaderFromUrl(url) {
    if (url.includes('creatidevpedia')) {
      return { headerTitle: 'David Llamas Román - CreatiDevpedia' }
    }
    if (url.includes('dlrdevacademy')) {
      return { headerTitle: 'Home | DlrDevAcademy' }
    }
    return { headerTitle: 'New Tab - Browser' }
  }

  #createContentElementFromUrl(url) {
    let el

    if (url.includes('creatidevpedia')) {
      el = document.createElement('creatidevpedia-web')
    } else if (url.includes('dlrdevacademy')) {
      el = document.createElement('dlrdevacademy-web')
    } else if (url === 'browser://newtab') {
      el = document.createElement('new-tab')
    } else {
      el = document.createElement('div')
      el.textContent = ''
    }

    el.setAttribute('data-url', url)
    return el
  }

  #updateArrows() {
    const currentTab = this.tabs[this.currentTabIndex]
    const left = this.shadowRoot.querySelector('arrows-icon[left]')
    const right = this.shadowRoot.querySelector('arrows-icon[right]')
    if (!currentTab || !left || !right) return

    const canBack = currentTab.currentIndex > 0
    const canForward = currentTab.currentIndex < currentTab.history.length - 1

    if (canBack) left.removeAttribute('disabled')
    else left.setAttribute('disabled', '')

    if (canForward) right.removeAttribute('disabled')
    else right.setAttribute('disabled', '')
  }
}

customElements.define('web-browser-content', WebBrowserContent)
