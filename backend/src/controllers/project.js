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

'use strict'

// imports
import Project from '../models/project.js'

const projectController = {
  // add project to database
  addProject: async function (req, res) {
    const project = new Project()

    const params = req.body

    project.name = params.name
    project.description = params.description
    project.website = params.website
    project.gitHubRepositoryUrl = params.gitHubRepositoryUrl
    project.startDate = params.startDate
    project.endDate = params.endDate

    try {
      const addedProject = await project.save()

      return res.status(200).send({ project: addedProject })
    } catch (e) {
      return res.status(500).send({
        message: 'Failed to add data',
        error: e,
      })
    }
  },
  // get all project list ordered by start date
  getAllProjects: async function (req, res) {
    try {
      const projects = await Project.find().sort('startDate')

      res.status(200).send({ projects })
    } catch (e) {
      return res.status(500).send({
        message: 'Failed to return data',
        error: e,
      })
    }
  },
  // remove a specific project
  removeProject: async function (req, res) {
    try {
      const projectId = req.params.id
      const removedProject = await Project.findByIdAndDelete(projectId)

      res.status(200).send({ removedProject })
    } catch (e) {
      return res.status(500).send({
        message: 'Failed to remove data',
        error: e,
      })
    }
  },
}

export default projectController
