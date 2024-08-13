//! This software is licensed under the GNU General Public License, version 3 only.

'use strict'

// imports
import Project from '../models/project.js'

const projectController = {
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

      if (!projectAdded) {
        return res.status(404).send({
          message: 'Failed to add the project',
        })
      }

      return res.status(200).send({ project: projectAdded })
    } catch (e) {
      return res.status(500).send({
        message: 'Failed to add the document',
        error: e,
      })
    }
  },
}

export default projectController
