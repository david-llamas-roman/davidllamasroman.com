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

/** @type {require('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jobs', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Web developer',
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      employmentType: {
        type: Sequelize.ENUM(
          'Full-time',
          'Part-time',
          'Self-employed',
          'Freelance',
          'Contract',
          'Internship',
          'Apprenticeship',
          'Temporary Civil Servant',
          'Direct Contract',
          'Lifetime Civil Servant',
          'Co-op',
        ),
        allowNull: false,
        defaultValue: 'Full-time',
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Seville, Andalusia, Spain',
      },
      locationType: {
        type: Sequelize.ENUM('On-site', 'Hybrid', 'Remote'),
        allowNull: false,
        defaultValue: 'On-site',
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      isCurrentlyWorking: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jobs')
  },
}
