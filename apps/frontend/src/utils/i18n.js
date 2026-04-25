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

const isBrowser = typeof window !== 'undefined'

let currentLanguage = 'en'

if (isBrowser) {
  currentLanguage =
    localStorage.getItem('lang') ||
    (supportedLanguages.includes(navigator.language.split('-')[0])
      ? navigator.language.split('-')[0]
      : 'en')

  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', currentLanguage)
  }
}

const translations = {
  en: {
    root: {
      title: 'David Llamas Román',
      subtitle: 'Full-Stack Developer',
      theme: {
        title: 'Choose your reality...',
        options: {
          1: 'The Surface',
          2: 'The System',
        },
      },
    },
    workspaces: {
      'about-me': 'About Me',
      projects: 'Projects',
      experience: 'Experience',
      certifications: 'Certifications',
      blog: 'Blog',
      academy: 'Academy',
      contact: 'Contact',
    },
    'about-me': {
      title: 'Debugging Life',
      slides: {
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
        images: {
          1: '/img/unDraw/scratch.svg',
          2: '/img/unDraw/youtube.svg',
          3: '/img/unDraw/coding.svg',
          4: '/img/unDraw/delete.svg',
          5: '/img/unDraw/python-youtube.svg',
          6: '/img/unDraw/web-development.svg',
          7: '/img/unDraw/vertical-content.svg',
          8: '/img/unDraw/delete.svg',
          9: '/img/unDraw/up-to-sky.svg',
        },
        imagesAltAttributes: {
          1: 'Game Development Illustration',
          2: 'Content Creation for YouTube Illustration',
          3: 'Coding Illustration',
          4: 'Delete YouTube Channel Illustration',
          5: 'Learning Python Illustration',
          6: 'Web Development Illustration',
          7: 'Vertical Content Illustration',
          8: 'Delete Social Media Illustration',
          9: 'Up to sky Illustration',
        },
      },
      text: {
        paragraphs: {
          1: `I've always felt different. I was never into football. I was that "nerd" who stayed in his room creating content, learning to code, or playing videogames.`,
          2: `Being 18 was a turning point in my life. I wanted to quit all this intense learning. I wanted to be more social, go out, have fun. After all, isn't that what someone my age is supposed to be doing?`,
          3: `A few months later, I realized I'm not that kind of person. Besides, none of that matched my life philosophy, my goals, my ambitions. At what age can someone take a risk? At what age can you place a bet on something and it's still "okay" if you lose?`,
          4: {
            1: `There's a quote that really stuck with me: "From 20 to 30, learn. From 30 to 40, make money. From 40 onward, help others."`,
            2: `That's why, right now, I'm trying to give my all every single day. Another quote that marked me: "...I don't want to grow old and regret not having tried..."`,
          },
          5: `Today, I'm starting a trial period, a time when I'm going to give it my all, and most of all, a time when I won't stop learning. If you look at all this through a developer's eyes, I now know how to move forward, where to go, and now it's time to execute.`,
          6: `I don't care how many times I've changed my perssonal brand over the past year. I don't care how many times I've fallen. Change is part of the process, and sometimes, you have to hit rock bottom to bounce back and rise, all the way up to the sky, "up to sky".`,
        },
        images: {
          1: '/img/unDraw/videogames.svg',
          2: {
            1: '/img/unDraw/party.svg',
            2: '/img/unDraw/party-drinks.svg',
          },
          3: '/img/unDraw/entrepreneur.svg',
          4: '/img/unDraw/execute-time.svg',
        },
        imagesAltAttributes: {
          1: 'Videogames Illustration',
          2: {
            1: 'Marshmello Illustration',
            2: 'Beer Illustration',
          },
          3: 'Businessman Illustration',
          4: 'Man in the office Illustration',
        },
      },
    },
    projects: {
      title: 'Deploying Dreams',
    },
    experience: {
      title: 'Professional Growth',
      labels: {
        1: 'View More',
        2: 'Go Back',
      },
      jobs: {
        1: {
          title: 'Private Java Teacher',
          'employment-type': '',
          location: 'Seville, Andalusia, Spain',
          company: '',
          date: 'February 2025 - March 2025',
          description:
            'I taught online Java classes from scratch to a health engineering student.',
        },
        2: {
          title: 'Web Developer',
          'employment-type': 'Co-op',
          location: 'Seville, Andalusia, Spain',
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
          'employment-type': 'Internship',
          location: 'Seville, Andalusia, Spain',
          company: 'Ayesa',
          date: 'March 2025 - June 2025',
          description: `I participated in a project related to the energy sector, where I carried out various implementations, including data filtering features for large databases, as well as pages and tables in the web application. The application was developed using Spring (Java 17) on the backend and Angular 9 on the frontend.`,
        },
        4: {
          title: 'Private Java Teacher',
          'employment-type': '',
          location: 'Seville, Andalusia, Spain',
          company: '',
          date: 'June 2025 - July 2025',
          description:
            'I taught online Java classes focused on functional programming and Java 8 streams to a health engineering student.',
        },
        5: {
          title: 'Teleoperator',
          'employment-type': 'Part-time',
          location: 'Seville, Andalusia, Spain',
          company: 'Konecta',
          date: 'October 2025 - October 2025',
          description:
            'I made calls with the objective of selling all type of devices (smartphones, headphones, smartwatches...) to clients already in the portfolio.',
        },
        6: {
          title: 'Private Java Teacher',
          'employment-type': '',
          location: 'Seville, Andalusia, Spain',
          company: '',
          date: 'February 2026 - March 2026',
          description:
            'I taught online Java classes from scratch to a health engineering student.',
        },
        7: {
          title: 'IT Customer Service Associate (IT Support L1)',
          'employment-type': 'Full-time',
          location: 'Seville, Andalusia, Spain',
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
    certifications: {
      title: 'Training',
      filters: {
        1: 'Cambridge',
        2: 'Platzi',
        3: 'Udemy',
        4: 'Mastermind',
        5: 'OpenWebinars',
      },
      'anchor-title': 'Certificate',
      labels: {
        1: 'Skills',
        2: 'Go Back',
      },
      courses: {
        'not-regulated': {
          1: {
            title: 'Cambridge B1 Preliminary',
            subtitle: 'Score 142',
            company: 'cambridge',
            skills: {
              1: 'Listening',
              2: 'Reading',
              3: 'Writing',
              4: 'Speaking',
            },
            url: 'https://www.cambridgeenglish.org/es/exams-and-tests/preliminary/',
            issued: 'July 2025',
          },
          2: {
            title: 'Curso de Fundamentos de JavaScript',
            subtitle: 'Platzi',
            company: 'platzi',
            skills: {
              1: 'JavaScript',
            },
            url: 'https://platzi.com/p/davidllamasroman/curso/10266-course/diploma/detalle/',
            issued: 'September 2025',
          },
          3: {
            title: 'Curso de JavaScript: Web Components',
            subtitle: 'Platzi',
            company: 'platzi',
            skills: {
              1: 'JavaScript',
            },
            url: 'https://platzi.com/p/davidllamasroman/curso/2199-course/diploma/detalle/',
            issued: 'September 2025',
          },
          4: {
            title: 'Diseña tu Estrategia de Marca Personal paso a paso',
            subtitle: 'Udemy',
            company: 'udemy',
            skills: {
              1: 'Personal Branding',
            },
            url: 'https://www.udemy.com/certificate/UC-2bcc74c7-b7b4-4286-9911-51ce7e308557/',
            issued: 'August 2025',
          },
          5: {
            title: 'Curso de NestJS: Autenticación con Passport y JWT',
            subtitle: 'Platzi',
            company: 'platzi',
            skills: {
              1: 'JWT',
              2: 'Passport.js',
              3: 'NestJS',
              4: 'TypeScript',
              5: 'REST APIs',
            },
            url: 'https://platzi.com/p/davidllamasroman/curso/2283-nestjs-auth/diploma/detalle/',
            issued: 'May 2025',
          },
          6: {
            title: 'Curso de NestJS: Persistencia de Datos con TypeORM',
            subtitle: 'Platzi',
            company: 'platzi',
            skills: {
              1: 'NestJS',
              2: 'TypeScript',
              3: 'TypeORM',
            },
            url: 'https://platzi.com/p/davidllamasroman/curso/2282-course/diploma/detalle/',
            issued: 'May 2025',
          },
          7: {
            title:
              'Curso de NestJS: Programación Modular, Documentación con Swagger y Deploy',
            subtitle: 'Platzi',
            company: 'platzi',
            skills: {
              1: 'NestJS',
              2: 'TypeScript',
              3: 'REST APIs',
            },
            url: 'https://platzi.com/p/davidllamasroman/curso/2274-nestjs-modular/diploma/detalle/',
            issued: 'May 2025',
          },
          8: {
            title: 'Curso de Backend con NestJS',
            subtitle: 'Platzi',
            company: 'platzi',
            skills: {
              1: 'NestJS',
              2: 'TypeScript',
              3: 'REST APIs',
              4: 'DTO',
              5: 'Service Layer',
            },
            url: 'https://platzi.com/p/davidllamasroman/curso/2272-nestjs/diploma/detalle/',
            issued: 'March 2025',
          },
          9: {
            title: 'Curso de Arquitecturas CSS',
            subtitle: 'Platzi',
            company: 'platzi',
            skills: {
              1: 'SOLID',
              2: 'BEM',
              3: 'Atomic Design',
              4: 'OOCSS',
              5: 'SMACSS',
              6: 'ITCSS',
              7: 'Tailwind CSS',
            },
            url: 'https://platzi.com/p/davidllamasroman/curso/7991-arquitecturas-css/diploma/detalle/',
            issued: 'February 2025',
          },
          10: {
            title: 'Curso de Responsive Design: Maquetación Mobile First',
            subtitle: 'Platzi',
            company: 'platzi',
            skills: {
              1: 'Mobile First',
              2: 'BEM',
            },
            url: 'https://platzi.com/p/davidllamasroman/curso/2030-mobile-first/diploma/detalle/',
            issued: 'January 2025',
          },
          11: {
            title: 'Curso para Desarrollar tu Creatividad: Técnicas y Hábitos',
            subtitle: 'Platzi',
            company: 'platzi',
            skills: {
              1: 'Branding',
              2: 'Requirements Engineering',
            },
            url: 'https://platzi.com/p/davidllamasroman/curso/2004-tecnicas-creatividad/diploma/detalle/',
            issued: 'December 2024',
          },
          12: {
            title: 'Ingeniería de Requisitos',
            subtitle: 'Udemy',
            company: 'udemy',
            skills: {
              1: 'Requirements Engineering',
            },
            url: 'https://www.udemy.com/certificate/UC-c1a59b7b-ddf2-44fc-890f-b066b946761e/',
            issued: 'December 2024',
          },
          13: {
            title: 'Curso de Flexbox y CSS Grid',
            subtitle: 'OpenWebinars',
            company: 'openwebinars',
            skills: {
              1: 'CSS',
            },
            url: 'https://openwebinars.net/cert/47zN',
            issued: 'November 2024',
          },
          14: {
            title: 'Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap',
            subtitle: 'Udemy',
            company: 'udemy',
            skills: {
              1: 'CSS',
            },
            url: 'https://www.udemy.com/certificate/UC-3ffa2ee9-c092-466d-bf81-8942294df4fa/',
            issued: 'October 2024',
          },
          15: {
            title:
              'Curso de Branding - Marca, Logotipo, Naming, Marketing, Logo',
            subtitle: 'Udemy',
            company: 'udemy',
            skills: {
              1: 'Branding',
              2: 'Brand Architecture',
              3: 'Brand Naming',
              4: 'Rebranding',
              5: 'Logo Design',
              6: 'Visual Identity',
              7: 'Personal Branding',
            },
            url: 'https://www.udemy.com/certificate/UC-ddb6503b-c9c9-45c0-8aec-0e53a2b2e7d9/',
            issued: 'October 2024',
          },
          16: {
            title: 'Cisco Curso de direccionamiento IP y Subnetting - CCNA',
            subtitle: 'Udemy',
            company: 'udemy',
            skills: {
              1: 'VLSM',
            },
            url: 'https://www.udemy.com/certificate/UC-7119cca7-dfe5-40cf-954b-e1680f93e6ea/',
            issued: 'May 2024',
          },
          17: {
            title: 'Diseño de Bases de Datos Relacionales con MySQL',
            subtitle: 'Mastermind',
            company: 'mastermind',
            skills: {
              1: 'Relational Databases',
              2: 'SQL',
              3: 'MySQL',
              4: 'MariaDB',
            },
            url: 'https://mastermind.ac/certificado/71656f94f23041328d181005ae42aa7a',
            issued: 'February 2024',
          },
          18: {
            title: 'Curso de HTML5 completo y desde cero',
            subtitle: 'Udemy',
            company: 'udemy',
            skills: {
              1: 'HTML',
            },
            url: 'https://www.udemy.com/certificate/UC-92d0dc18-e37e-4542-a645-d84ce4eacd50/',
            issued: 'July 2022',
          },
        },
      },
    },
    contact: {
      title: 'Get in touch with me',
    },
    copyright: {
      symbol: '&copy;',
      text: `David Llamas Román. Licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GNU General Public License version 3 (GPL-3.0) only</a>.`,
    },
    'the-system': {
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
      websites: {
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
        },
        infodev: {
          subtitle: 'Main CV',
          'profesional-data': {
            location: 'Seville (Seville)',
          },
          'laboral-experience': 'Laboral Experience',
        },
        dlrdevacademy: {
          'search-input-placeholder': 'What do you want to learn today?',
          'navbar-elements': {
            1: 'Web Development',
          },
        },
      },
    },
  },
  es: {
    root: {
      title: 'David Llamas Román',
      subtitle: 'Desarrollador Full-Stack',
      theme: {
        title: 'Escoge tu realidad...',
        options: {
          1: 'The Surface',
          2: 'The System',
        },
      },
    },
    workspaces: {
      'about-me': 'Sobre Mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      certifications: 'Certificaciones',
      blog: 'Blog',
      academy: 'Academia',
      contact: 'Contacto',
    },
    'about-me': {
      title: 'Debugging Life',
      slides: {
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
        images: {
          1: '../../public/img/unDraw/scratch.svg',
          2: '../../public/img/unDraw/youtube.svg',
          3: '../../public/img/unDraw/coding.svg',
          4: '../../public/img/unDraw/delete.svg',
          5: '../../public/img/unDraw/python-youtube.svg',
          6: '../../public/img/unDraw/web-development.svg',
          7: '../../public/img/unDraw/vertical-content.svg',
          8: '../../public/img/unDraw/delete.svg',
          9: '../../public/img/unDraw/up-to-sky.svg',
        },
      },
      text: {
        paragraphs: {
          1: `I've always felt different. I was never into football. I was that "nerd" who stayed in his room creating content, learning to code, or playing videogames.`,
          2: `Being 18 was a turning point in my life. I wanted to quit all this intense learning. I wanted to be more social, go out, have fun. After all, isn't that what someone my age is supposed to be doing?`,
          3: `A few months later, I realized I'm not that kind of person. Besides, none of that matched my life philosophy, my goals, my ambitions. At what age can someone take a risk? At what age can you place a bet on something and it's still "okay" if you lose?`,
          4: {
            1: `There's a quote that really stuck with me: "From 20 to 30, learn. From 30 to 40, make money. From 40 onward, help others."`,
            2: `That's why, right now, I'm trying to give my all every single day. Another quote that marked me: "...I don't want to grow old and regret not having tried..."`,
          },
          5: `Today, I'm starting a trial period, a time when I'm going to give it my all, and most of all, a time when I won't stop learning. If you look at all this through a developer's eyes, I now know how to move forward, where to go, and now it's time to execute.`,
          6: `I don't care how many times I've changed my perssonal brand over the past year. I don't care how many times I've fallen. Change is part of the process, and sometimes, you have to hit rock bottom to bounce back and rise, all the way up to the sky, "up to sky".`,
        },
        images: {
          1: '/img/unDraw/videogames.svg',
          2: {
            1: '/img/unDraw/party.svg',
            2: '/img/unDraw/party-drinks.svg',
          },
          3: '/img/unDraw/entrepreneur.svg',
          4: '/img/unDraw/execute-time.svg',
        },
        imagesAltAttributes: {
          1: 'Videogames Illustration',
          2: {
            1: 'Marshmello Illustration',
            2: 'Beer Illustration',
          },
          3: 'Businessman Illustration',
          4: 'Man in the office Illustration',
        },
      },
    },
    projects: {
      title: 'Desplegando Sueños',
    },
    experience: {
      title: 'Crecimiento Profesional',
      labels: {
        1: 'Ver Más',
        2: 'Volver',
      },
      jobs: {
        1: {
          title: 'Private Java Teacher',
          'employment-type': '',
          location: 'Seville, Andalusia, Spain',
          company: '',
          date: 'February 2025 - March 2025',
          description:
            'I taught online Java classes from scratch to a health engineering student.',
        },
        2: {
          title: 'Web Developer',
          'employment-type': 'Co-op',
          location: 'Seville, Andalusia, Spain',
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
          'employment-type': 'Internship',
          location: 'Seville, Andalusia, Spain',
          company: 'Ayesa',
          date: 'March 2025 - June 2025',
          description: `I participated in a project related to the energy sector, where I carried out various implementations, including data filtering features for large databases, as well as pages and tables in the web application. The application was developed using Spring (Java 17) on the backend and Angular 9 on the frontend.`,
        },
        4: {
          title: 'Private Java Teacher',
          'employment-type': '',
          location: 'Seville, Andalusia, Spain',
          company: '',
          date: 'June 2025 - July 2025',
          description:
            'I taught online Java classes focused on functional programming and Java 8 streams to a health engineering student.',
        },
        5: {
          title: 'Teleoperator',
          'employment-type': 'Part-time',
          location: 'Seville, Andalusia, Spain',
          company: 'Konecta',
          date: 'October 2025 - October 2025',
          description:
            'I made calls with the objective of selling all type of devices (smartphones, headphones, smartwatches...) to clients already in the portfolio.',
        },
        6: {
          title: 'Private Java Teacher',
          'employment-type': '',
          location: 'Seville, Andalusia, Spain',
          company: '',
          date: 'February 2026 - March 2026',
          description:
            'I taught online Java classes from scratch to a health engineering student.',
        },
        7: {
          title: 'IT Customer Service Associate (IT Support L1)',
          'employment-type': 'Full-time',
          location: 'Seville, Andalusia, Spain',
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
    'the-system': {
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
      websites: {
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
        },
        infodev: {
          subtitle: 'CV Principal',
          'profesional-data': {
            location: 'Sevilla (Sevilla)',
          },
          'laboral-experience': 'Experiencia Laboral',
        },
        dlrdevacademy: {
          'search-input-placeholder': '¿Qué quieres aprender hoy?',
          'navbar-elements': {
            1: 'Desarrollo Web',
          },
        },
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

export { t, setLanguage, getLanguage, translations }
