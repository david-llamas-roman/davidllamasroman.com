//! This software is licensed under the GNU General Public License, version 3 only.

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
      const projectAdded = await project.save()

      return res.status(200).send({ project: projectAdded })
    } catch (e) {
      return res.status(500).send({
        message: 'Failed to add the project',
        error: e,
      })
    }
  },
  // get a specific existing project
  getProjectById: async function (req, res) {
    try {
      const projectId = req.params.id
      const project = await Project.findById(projectId)

      if (!project) {
        return res.status(404).send({
          message: 'Project not found',
        })
      }

      return res.status(200).send({ project })
    } catch (e) {
      return res.status(500).send({
        message: 'Failed to return data',
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
