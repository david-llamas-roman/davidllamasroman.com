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
import { t } from '@/utils/i18n.js'

const messageType = {
  ERROR: 'error',
  INSTRUCTION: 'instruction',
}

class TerminalEmulatorContent extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    const isProjects = this.hasAttribute('projects')

    const projectsHeader = `<h1>${t('the-system.terminal-emulator.title')}</h1>`
    const normalHeader = `<h1>DLR's Terminal</h1>`

    let count = 0

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="terminal">
        <div class="terminal__titles">
          ${isProjects ? projectsHeader : normalHeader}
          <h2>${t('the-system.terminal-emulator.instructions.title')}</h2>
        </div>
        <ul class="terminal__rules">
          ${Object.values(t('the-system.terminal-emulator.instructions.list-elements')).map((element) => `<li><p><span>${++count}.</span> ${element}</p></li>`)}
        </ul>
        <div class="terminal__output"></div>
        <div class="terminal__input">
          <div class="prompt">
            <p>Dev</p>
            <p>Projects</p>
          </div>
          <input type="text" name="terminal-input" autocomplete="off" />
        </div>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        .terminal {
          position: relative;

          width: var(--max-percentage, 100%);
          height: var(--max-percentage, 100%);

          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto 1fr auto;

          padding: 2rem;

          background-color: var(--dark-grey-rgba, rgba(35, 35, 40, 0.25));
          backdrop-filter: var(--app-backdrop-blur, blur(10px));

          font-family: 'Montserrat';

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100dvh;
            background: repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15),
              rgba(0, 0, 0, 0.15) 1px,
              transparent 1px,
              transparent 2px
            );
            pointer-events: none;
          }

          .terminal__titles {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-bottom: 1rem;

            border-bottom: 4px solid var(--white, #fff);

            & h1 {
              padding-bottom: 0.5rem;

              color: var(--pantone-red, #da291c);

              font-size: max(40px, 2.5vmax);
              font-weight: 900;
              text-shadow: 0 0 5px var(--pantone-red, #da291c);
            }

            & h2 {
              color: var(--white, #fff);
              text-shadow: 0 0 5px var(--white, #fff);
            }
          }

          & p {
            color: var(--white, #fff);
            
            font-size: max(16px, 0.9vmax);
            
            text-shadow: 0 0 5px var(--white, #fff);

            & span, strong {
              color: var(--pantone-red, #da291c);

              font-weight: 900;

              text-shadow: 0 0 5px var(--pantone-red, #da291c);
            }
          }

          & ul {
            padding-bottom: 1rem;

            border-bottom: 4px solid var(--white, #fff);
          }

          .terminal__output {
            height: 63dvh;

            padding: 0 1rem;
            margin-top: 0.8rem;

            overflow-y: auto;

            & p {
              white-space: pre;
            }

            &::-webkit-scrollbar {
              width: 0.5rem;

              background-color: var(--dark-grey--rgba, rgba(35, 35, 40, 0.25));

              border-radius: 8px;
              -webkit-border-radius: 8px;
              -moz-border-radius: 8px;
              -ms-border-radius: 8px;
              -o-border-radius: 8px;
            }

            &::-webkit-scrollbar-thumb {
              background-color: var(--white, #fff);

              border-radius: 8px;
              -webkit-border-radius: 8px;
              -moz-border-radius: 8px;
              -ms-border-radius: 8px;
              -o-border-radius: 8px;
            }

            .card {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: auto auto 1fr;

              padding-bottom: 1rem;

              color: var(--white, #fff);
              background-color: var(--pantone-red, #da291c);

              text-shadow: none;

              & h2 {
                padding: 0.25rem 1rem;

                color: var(--pantone-red, #da291c);
                background-color: var(--white, #fff);

                font-size: max(22px, 1.25vmax);
              }

              & h3 {
                padding: 0.25rem 1rem;
                margin-bottom: 0.45rem;

                font-size: max(18px, 1.05vmax);
              }

              & div {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                gap: 0.5rem;

                & p {
                  width: 180px;

                  padding: 0.25rem 0.5rem;

                  color: var(--pantone-red, #da291c);
                  background-color: var(--white, #fff);

                  font-size: max(16px, 0.9vmax);
                  font-weight: 700;
                  text-align: center;
                }
              }
            }
          }

          .terminal__input {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.4rem;

            .prompt {
              display: flex;
              justify-content: left;
              align-items: center;

              & p {
                padding: 0.25rem 0.5rem;

                font-weight: 700;

                border-radius: 1rem;

                &:nth-child(1) {
                  background-color: var(--pantone-red, #da291c);

                  box-shadow: 0 0 10px var(--pantone-red, #da291c);

                  border-top-right-radius: 0;
                  border-bottom-right-radius: 0;
                }

                &:nth-child(2) {
                  background-color: var(--white, #fff);
                  color: var(--pantone-red, #da291c);

                  box-shadow: 0 0 5px var(--white, #fff);

                  border-top-left-radius: 0;
                  border-bottom-left-radius: 0;
                }
              }

              &::after {
                content: "|";

                margin-left: 8px;
                padding-bottom: 0.3rem;

                font-family: 'Montserrat';
                font-size: max(22px, 1.25vmax);
                font-weight: 900;

                color: var(--white, #fff);

                text-shadow: 0 0 5px var(--white, #fff);

                animation: blink 1.5s step-end infinite;
              }
            }

            & input {
              position: relative;

              width: var(--max-percentage, 100%);

              padding: 0.25rem 0 0 0.25rem;

              color: var(--white, #fff);
              background-color: transparent;

              font-family: 'Montserrat';
              font-weight: 700;
              font-size: max(16px, 0.9vmax);

              border: 1px solid var(--light-grey-2, rgba(255, 255, 255, 0.28));
              outline: none;
              caret-color: transparent;
            }
          }
        }

        .error {
          padding: 0.25rem 1rem;
          margin: 1rem 2rem;

          background-color: var(--pantone-red, #da291c);

          text-align: center;
          
          text-shadow: none;
          box-shadow: 0 0 10px var(--pantone-red, #da291c);
        }
        
        .instruction {
          text-align: center;
        }

        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }

          25%, 75% {
            opacity: 0;
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
    this.#initTerminal()
  }

  #projects = t('the-system.terminal-emulator.projects')

  #commandLs(args) {
    if (args[0] !== '-l') {
      this.#printLine(
        `${t('the-system.terminal-emulator.messages.usage')}: ls -l`,
        messageType.INSTRUCTION,
      )
      return
    }

    const entries = Object.entries(this.#projects)

    entries.forEach(([key, value], index) => {
      const isLast = index === entries.length - 1
      const branch = isLast ? '└── ' : '├── '

      this.#printLine(branch + '📁 ' + key)

      const prefix = isLast ? '    ' : '│   '

      this.#printProjectTree(value, prefix)
    })
  }

  #commandCd(args) {
    const projectNameRaw = args[0]
    if (!projectNameRaw) {
      this.#printLine(
        `${t('the-system.terminal-emulator.messages.usage')}: cd project-name`,
        messageType.INSTRUCTION,
      )
      return
    }

    const projectNameLower = projectNameRaw.toLowerCase()

    const projectKey = Object.keys(this.#projects).find(
      (key) => key.toLowerCase() === projectNameLower,
    )
    if (!projectKey) {
      this.#printLine(
        `${t('the-system.terminal-emulator.messages.errors.project-not-found')}: ${projectNameRaw}`,
        messageType.ERROR,
      )
      return
    }

    const project = this.#projects[projectKey]

    this.#printCard([projectKey, project.description, project.tech])
  }

  #commands = {
    ls: (args) => this.#commandLs(args),
    cd: (args) => this.#commandCd(args),
  }

  #printLine(text, type) {
    const output = this.shadowRoot.querySelector('.terminal__output')

    const line = document.createElement('p')

    switch (type) {
      case messageType.ERROR:
        line.classList.add('error')
        break
      case messageType.INSTRUCTION:
        line.classList.add('instruction')
        break
    }

    line.textContent = text

    output.appendChild(line)
  }

  #printCard(data) {
    const [projectName, projectDescription, projectTech] = data

    const output = this.shadowRoot.querySelector('.terminal__output')

    const card = document.createElement('article')
    card.classList.add('card')

    const cardTitle = document.createElement('h2')
    cardTitle.textContent = projectName
    card.appendChild(cardTitle)

    const cardSubtitle = document.createElement('h3')
    cardSubtitle.textContent = projectDescription
    card.appendChild(cardSubtitle)

    const cardTechnologies = document.createElement('div')

    for (const tech of projectTech) {
      const technology = document.createElement('p')
      technology.textContent = tech

      cardTechnologies.appendChild(technology)
    }

    card.appendChild(cardTechnologies)

    output.appendChild(card)
  }

  #printProjectTree(project, prefix) {
    this.#printLine(prefix + '├── 📄 description')
    this.#printLine(prefix + '│   └── ' + project.description)

    this.#printLine(prefix + '└── 📁 tech')

    const techPrefix = prefix + '    '

    project.tech.forEach((tech, index) => {
      const isLast = index === project.tech.length - 1
      const branch = isLast ? '└── ' : '├── '

      this.#printLine(techPrefix + branch + tech)
    })
  }

  #sanitizeInput(text) {
    if (!text) return null

    if (text.length > 100) return null

    const clean = text.replace(/[^\w\s-]/g, '')

    return clean.trim()
  }

  #executeCommand(command) {
    const parts = command.split(/\s+/)

    const cmd = parts[0]
    const args = parts.slice(1)

    if (!this.#commands[cmd]) {
      this.#printLine(
        `${t('the-system.terminal-emulator.messages.errors.command-not-found')}: ${cmd}`,
        messageType.ERROR,
      )
      return
    }

    this.#commands[cmd](args)
  }

  #initTerminal() {
    const input = this.shadowRoot.querySelector('input')

    input.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return

      const raw = input.value
      input.value = ''

      const output = this.shadowRoot.querySelector('.terminal__output')
      output.innerHTML = ''

      const command = this.#sanitizeInput(raw)
      if (!command) {
        this.#printLine(
          t('the-system.terminal-emulator.messages.errors.invalid-command'),
          messageType.ERROR,
        )
        return
      }

      this.#executeCommand(command)
    })
  }
}

customElements.define('terminal-emulator-content', TerminalEmulatorContent)
