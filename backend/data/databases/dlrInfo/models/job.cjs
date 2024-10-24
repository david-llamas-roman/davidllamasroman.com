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
/* eslint-disable no-undef */
'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Web developer',
      },
      description: { type: DataTypes.STRING, allowNull: false },
      employmentType: {
        type: DataTypes.ENUM(
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
      companyName: { type: DataTypes.STRING, allowNull: false },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Seville, Andalusia, Spain',
      },
      locationType: {
        type: DataTypes.ENUM('On-site', 'Hybrid', 'Remote'),
        allowNull: false,
        defaultValue: 'On-site',
      },
      startDate: { type: DataTypes.DATE, allowNull: false },
      endDate: { type: DataTypes.DATE },
      isCurrentlyWorking: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Job',
    },
  )
  return Job
}
