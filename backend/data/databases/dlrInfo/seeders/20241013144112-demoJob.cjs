/*
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
 */

/* eslint-disable no-unused-vars */
'use strict'

const { v4: uuidv4 } = require('uuid')

/** @type {require('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert(
        'Jobs',
        [
          {
            id: uuidv4(),
            title: 'Example Job 1',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus vulputate lobortis. Maecenas nisi est, consequat efficitur metus id, euismod faucibus dui. Aenean aliquet arcu ut nunc interdum lobortis. Suspendisse aliquet blandit urna vitae dictum. Nam sagittis aliquam dui, at accumsan ex tempor quis. Praesent ultricies nisl in quam maximus, a sollicitudin odio accumsan. Sed cursus nisl a scelerisque ornare.',
            companyName: 'Example Company 1',
            startDate: '2024/01/01',
          },
        ],
        {},
      )
    } catch (error) {
      console.error(error)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {})
  },
}
