<!--
 * This file is part of davidllamasroman.com.
 *
 * davidllamasroman.com is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 *
 * davidllamasroman.com is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with davidllamasroman.com. If not, see <https://www.gnu.org/licenses/gpl-3.0.en.html>.
 *
 * Copyright (C) 2024 David Llamas Román
-->

# davidllamasroman.com
This is my personal website where you can find my projects, my laboral experience and all information about me that I consider is relevant.

- [davidllamasroman.com](#davidllamasromancom)
  - [💻 More details about website](#-more-details-about-website)
    - [Website Type](#website-type)
    - [Sections](#sections)
  - [🛠️ Technologies](#️-technologies)
    - [💄 Frontend](#-frontend)
    - [⚙️ Backend](#️-backend)
      - [API](#api)
      - [ORM](#orm)
      - [RDBMS](#rdbms)
    - [✏️ Linters](#️-linters)
  - [🌐 Languages](#-languages)
  - [📚 Courses in Markdown](#-courses-in-markdown)
  - [👨‍⚖️ Licenses](#️-licenses)


## 💻 More details about website
### Website Type
- **Web App**

  This is a web app, because we have 2 database in it (1 SQLite and 1 MariaDB) and we have an API with which we can access and manage databases data. After, the data that we extract through the API is showed in the frontend. If the main objective of the website will be catch clients and we will not need any database, any API (because we search, for example, redirect to an external app), the website type will be 'Landing Page'.

### Sections
- **Home**

  In this section, it will show an 'intro' and some links to see one section or other.

- **About me**

  In this section, it will show a text that have as main objective introduce myself and help to people to meet me better.

- **Projects**

  In this section, it will show all my projects and relevant info about them.

- **Experience**

  In this section, it will show all jobs and work positions that I have been.

- **Academy**

  In this section you would find some free courses about technologies in which I have a good level. The videos will be uploaded in YouTube and, here, will be the text version of course and the video embedded.

- **Get in touch**

  In this section you would find a chat to talk with me, but do not by any reason. Only, for example, if you want to tell me something about a work issue, about a side or personal project that you have, about my content... I think that you understand the type of messages that I expect to receive.

- **Licenses**

  In this section, it will show all licenses under which the website and its content are licensed.

## 🛠️ Technologies
### 💄 Frontend
- HTML
- CSS
- Vanilla JS

### ⚙️ Backend
#### API
- [Node.js](https://nodejs.org/)
#### ORM
- [Sequelize](https://sequelize.org/)
#### RDBMS
- [SQLite](https://www.sqlite.org/)
- [MariaDB](https://mariadb.org/)

### ✏️ Linters
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
  ```
  npm init @eslint/config@latest
  ```

## 🌐 Languages
- English
- Spanish

## 📚 Courses in Markdown
- [**HTML (v0) - only in spanish**](./backend/data/courses/html/v0/html.md)
- [**CSS (v0) - only in spanish**](./backend/data/courses/css/v0/css.md)

## 👨‍⚖️ Licenses
&copy; 2024 David Llamas Román. Licensed under the [GNU General Public License version 3 (GPL-3.0) only](https://www.gnu.org/licenses/gpl-3.0.en.html)

> [!WARNING]
> This file is part of davidllamasroman.com.
>
> davidllamasroman.com is free software: you can redistribute it and/or modify
> it under the terms of the GNU General Public License as published by
> the Free Software Foundation, either version 3 of the License.
>
> davidllamasroman.com is distributed in the hope that it will be useful,
> but WITHOUT ANY WARRANTY; without even the implied warranty of
> MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
> GNU General Public License for more details.
>
> You should have received a copy of the GNU General Public License
> along with davidllamasroman.com. If not, see <https://www.gnu.org/licenses/gpl-3.0.en.html>.
>
> Copyright (C) 2024 David Llamas Román

This is the warning that you can find in all files of davidllamasroman.com project that contains code. This warning are not in JSON files, because this type of files do not support comments.

In the second paragraph (line 7-10 of the WARNING) we refer to point 15 of the [GPL-3.0 license (GPL-3.0-only)](LICENSE):
```
15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
```
