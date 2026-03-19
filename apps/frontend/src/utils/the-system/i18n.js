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

const supportedLanguages = ['es', 'en']

let currentLanguage =
  localStorage.getItem('lang') ||
  (supportedLanguages.includes(navigator.language.split('-')[0])
    ? navigator.language.split('-')[0]
    : 'en')

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', currentLanguage)
}

const translations = {
  en: {
    workspaces: {
      'about-me': 'About Me',
      projects: 'Projects',
      experience: 'Experience',
      certifications: 'Certifications',
      blog: 'Blog',
      academy: 'Academy',
      contact: 'Contact',
    },
    creatidevpedia: {
      logo: {
        text: 'The Creative Dev Encyclopedia',
      },
      title: 'Full-stack Developer',
      biography: {
        title: 'Biography',
        info: {
          born: 'Born',
          dream: {
            title: 'Dream',
            text: 'Tech Entrepreneur',
          },
          occupation: {
            title: 'Occupation',
            text: 'Operation Unicorn',
          },
          spouse: {
            title: 'Spouse',
            text: 'JavaScript',
          },
        },
      },
      'about-me': {
        paragraphs: {
          1: '<strong>At 11</strong>, I was <span>making mini-games with Scratch</span>.',
          2: `<strong>At 13</strong>, I already knew <span>my path wasn't going to be like everyone else's</span>, I <strong>created my first YouTube channel</strong>.`,
          3: '<strong>At 14</strong>, I <strong>wrote my first line of code</strong>, in <span>C++</span>.',
          4: '<strong>At 15</strong>, I deleted my first YouTube channel after getting a strike, I <span>fell into an endless loop of making bad decisions</span>.',
          5: '<strong>At 16</strong>, I <strong>started learning Python</strong> and restarted on YouTube.',
          6: '<strong>At 17</strong>, I quit YouTube again, left Python behind, <span>discovered web development</span>, and began <strong>creating vertical content</strong> for Instagram and TikTok.',
          7: '<strong>At 18</strong>, I continued with <strong>web development</strong> and kept making <span>vertical programming content</span>.',
          8: '<strong>At 19</strong>, after yet another attempt at creating content for YouTube, I deleted all my social media accounts and, of course, <strong>kept working on web development</strong>.',
          9: '<strong>At 20</strong>, <span>here I am, writing this</span>, <span>learning about personal branding</span>, about social media, <span>continuing on this long-distance journey</span>, and <strong>starting to build projects that go beyond just learning</strong>. Web apps that can actually be used and have a real-world application.',
        },
      },
    },
    'terminal-emulator': {
      title: 'Projects',
      instructions: {
        title: 'How does the terminal work?',
        'list-elements': {
          1: 'Type <strong>ls -l</strong> to display a list of all projects.',
          2: 'Type <strong>cd name-of-project</strong> to access the information for the project with that name.',
        },
      },
      messages: {
        usage: 'Usage',
        errors: {
          'project-not-found': 'Project Not Found',
          'command-not-found': 'Command Not Found',
          'invalid-command': 'Invalid Command',
        },
      },
      projects: {
        Portfolio: {
          description: 'Personal Developer Portfolio',
          tech: [
            'HTML',
            'CSS',
            'JavaScript',
            'Web Components',
            'MariaDB',
            'Docker',
          ],
        },
      },
    },
    infodev: {
      subtitle: 'Main CV',
      'profesional-data': {
        location: 'Seville (Seville)',
      },
      'laboral-experience': 'Laboral Experience',
      jobs: {
        1: {
          title: 'Private Java Teacher',
          company: '',
          date: 'February 2025 - March 2025',
          description:
            'I taught online Java classes from scratch to a health engineering student.',
        },
        2: {
          title: 'Web Developer',
          company: 'Ayesa',
          date: 'April 2024 - March 2025',
          description: `From April 2024 to June of the same year, I completed a series of internal training courses, including:
  - Java.
  - Angular.
  - Spring.

From November 2024 to March 2025, I participated in the migration of an internal project's web application. My responsibilities included analyzing the architecture of the new backend, creating new endpoints, modifying existing ones, and laying the foundations of the frontend (routing system, main page, navigation...). The project migrated from a backend built with Spring 2010 and JSF-based frontend to a REST API developed with Spring and lightweight frontend build with Angular 19.`,
        },
        3: {
          title: 'Full-Stack Developer',
          company: 'Ayesa',
          date: 'March 2025 - June 2025',
          description: `I participated in a project related to the energy sector, where I carried out various implementations, including data filtering features for large databases, as well as pages and tables in the web application. The application was developed using Spring (Java 17) on the backend and Angular 9 on the frontend.`,
        },
        4: {
          title: 'Private Java Teacher',
          company: '',
          date: 'June 2025 - July 2025',
          description:
            'I taught online Java classes focused on functional programming and Java 8 streams to a health engineering student.',
        },
        5: {
          title: 'Teleoperator',
          company: 'Konecta',
          date: 'October 2025 - October 2025',
          description:
            'I made calls with the objective of selling all type of devices (smartphones, headphones, smartwatches...) to clients already in the portfolio.',
        },
        6: {
          title: 'Private Java Teacher',
          company: '',
          date: 'February 2026 - March 2026',
          description:
            'I taught online Java classes from scratch to a health engineering student.',
        },
        7: {
          title: 'IT Customer Service Associate (IT Support L1)',
          company: 'SearchIT',
          date: 'December 2025 - Present',
          description: `Providing first-line IT support in a project managed by Accenture, supporting end users in a healthcare environment.

Key responsibilities:
  - First-level IT Support (L1) for end users.
  - Incident and service request management through ticketing tools.
  - Troubleshooting hardware and software issues.
  - Support for a corporate applications and systems.
  - User assistance and issue diagnosis.
  - Escalation to higher-level support teams when required.
  - Compliance with SLAs and internal service protocols.`,
        },
      },
    },
    dlrdevacademy: {
      'search-input-placeholder': 'What do you want to learn today?',
      'navbar-elements': {
        1: 'Web Development',
      },
    },
  },
  es: {
    workspaces: {
      'about-me': 'Sobre Mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      certifications: 'Certificaciones',
      blog: 'Blog',
      academy: 'Academia',
      contact: 'Contacto',
    },
    creatidevpedia: {
      logo: {
        text: 'La Enciclopedia Creativa para Devs',
      },
      title: 'Desarrollador Full-stack',
      biography: {
        title: 'Biografía',
        info: {
          born: 'Nacimiento',
          dream: {
            title: 'Sueño',
            text: 'Empresario Tecnológico',
          },
          occupation: {
            title: 'Ocupación',
            text: 'Operación Unicornio',
          },
          spouse: {
            title: 'Pareja',
            text: 'JavaScript',
          },
        },
      },
      'about-me': {
        paragraphs: {
          1: '<strong>A los 11</strong>, <span>hacía minijuegos con Scratch</span>.',
          2: '<strong>A los 13</strong>, ya tenía claro que <span>mi camino no iba a ser igual al del resto</span>, <strong>creé mi primer canal de YouTube</strong>.',
          3: '<strong>A los 14</strong>, <strong>escribí mi primera línea de código</strong>, en <span>C++</span>.',
          4: '<strong>A los 15</strong>, eliminé mi primer canal de YouTube debido a un strike, <span>entré en un bucle infinito de tomar malas decisiones</span>.',
          5: '<strong>A los 16</strong>, <strong>empecé a aprender Python</strong> y volví a empezar en YouTube.',
          6: '<strong>A los 17</strong>, volví a dejar YouTube, dejé Python, <span>descubrí el desarrollo web</span> y empecé a <strong>crear contenido vertical</strong> para Instagram y TikTok.',
          7: '<strong>A los 18</strong>, seguí con el <strong>desarrollo web</strong> y seguí creando <span>contenido vertical de programación</span>.',
          8: '<strong>A los 19</strong>, después de hacer otro intento de crear contenido para YouTube, eliminé todas mis redes y, por supuesto, <strong>seguí con el desarrollo web</strong>.',
          9: '<strong>A los 20</strong>, <span>aquí estoy, escribiendo esto</span>, aprendiendo de marca personal, de redes, <span>continuando en esta carrera de fondo</span> y <strong>empezando a hacer proyectos que no se limiten únicamente al ámbito del aprendizaje</strong>. Aplicaciones web que puedan ser utilizadas y tengan una aplicación en el mundo real.',
        },
      },
    },
    'terminal-emulator': {
      title: 'Proyectos',
      instructions: {
        title: '¿Cómo funciona el terminal?',
        'list-elements': {
          1: 'Escribe <strong>ls -l</strong> para mostrar una lista de todos los proyectos disponibles.',
          2: 'Escribe <strong>cd nombre-del-proyecto</strong> para acceder a la información del proyecto con ese nombre.',
        },
      },
      messages: {
        usage: 'Uso',
        errors: {
          'project-not-found': 'Proyecto No Encontrado',
          'command-not-found': 'Comando No Encontrado',
          'invalid-command': 'Comando Inválido',
        },
      },
      projects: {
        Portfolio: {
          description: 'Personal Developer Portfolio',
          tech: [
            'HTML',
            'CSS',
            'JavaScript',
            'Web Components',
            'MariaDB',
            'Docker',
          ],
        },
      },
    },
    infodev: {
      subtitle: 'CV Principal',
      'profesional-data': {
        location: 'Sevilla (Sevilla)',
      },
      'laboral-experience': 'Experiencia Laboral',
      jobs: {
        1: {
          title: 'Profesor Particular de Java',
          company: '',
          date: 'Febrero 2025 - Marzo 2025',
          description:
            'Impartí clases online de Java desde 0 a una estudiante de ingeniería de la salud.',
        },
        2: {
          title: 'Desarrollador Web',
          company: 'Ayesa',
          date: 'Abril 2024 - Marzo 2025',
          description: `
            Desde Abril de 2024 hasta Junio de ese mismo año, cursé y finalicé una serie de cursos internos entre los que se encontraban:
            - Java.
            - Angular.
            - Spring.

            Desde Noviembre de 2024 hasta Marzo de 2025, participé en la migración de la aplicación web de un proyecto interno analizando la arquitectura que iba a tener el nuevo backend, creando nuevos endpoints y modificando alguno ya existente y construyendo los cimientos del frontend (sistema de rutas, página principal, navegación...). Se pasó de tener un backend con Spring 2010 y un frontend con JSF, a una API REST construida con Spring y un pequeño frontend construido con Angular 19.
          `,
        },
        3: {
          title: 'Desarrollador Full-Stack',
          company: 'Ayesa',
          date: 'Marzo 2025 - Junio 2025',
          description: `
              Participé en un proyecto relacionado con el sector energético donde llevé a cabo diversas implementaciones entre las que se pueden destacar filtros para el filtrado de datos (base de datos con gran cantidad de datos), páginas y tablas en su aplicación web, desarrollada con Spring (Java 17) en el lado del backend y con Angular 9 en el lado del frontend.
            `,
        },
        4: {
          title: 'Profesor Particular de Java',
          company: '',
          date: 'Junio 2025 - Julio 2025',
          description:
            'Impartí clases de Java enfocadas en la programación funcional y los streams de Java 8 a una estudiante de ingeniería de la salud.',
        },
        5: {
          title: 'Teleoperador',
          company: 'Konecta',
          date: 'Octubre 2025 - Octubre 2025',
          description:
            'Llevé a cabo llamadas con el objetivo de vender todo tipo de dispositivos (smartphones, auriculares, smartwatches...) a cliente que ya estaban en cartera.',
        },
        6: {
          title: 'Profesor Particular de Java',
          company: '',
          date: 'Febrero 2026 - Marzo 2026',
          description:
            'Impartí clases online de Java desde 0 a una estudiante de ingeniería de la salud.',
        },
        7: {
          title: 'IT Customer Service Associate (IT Support L1)',
          company: 'SearchIT',
          date: 'Diciembre 2025 - Presente',
          description: `
            Brindando soporte informático de primer nivel en un proyecto gestionado por Accenture, apoyando a los usuarios del entorno sanitario.

            Responsabilidades principales:
            - Soporte técnico de primer nivel (L1) a usuarios finales.
            - Gestión de incidencias y solicitudes mediante herramientas de ticketing.
            - Resolución de problemas de hardware y software.
            - Soporte en aplicaciones y sistemas corporativos.
            - Asistencia de usuarios y diagnóstico de incidencias.
            - Escalado de incidencias a niveles superiores cuando es necesario.
            - Cumplimiento de SLAs y protocolos internos del servicio.
          `,
        },
      },
    },
    dlrdevacademy: {
      'search-input-placeholder': '¿Qué quieres aprender hoy?',
      'navbar-elements': {
        1: 'Desarrollo Web',
      },
    },
  },
}

const t = (key) => {
  return (
    key
      .split('.')
      .reduce((object, key) => object?.[key], translations[currentLanguage]) ||
    key
  )
}

const setLanguage = (language) => {
  if (!supportedLanguages.includes(language)) return

  currentLanguage = language
  localStorage.setItem('lang', language)
  document.dispatchEvent(
    new CustomEvent('languageChanged', { detail: language }),
  )
}

const getLanguage = () => {
  return currentLanguage
}

export { t, setLanguage, getLanguage }
