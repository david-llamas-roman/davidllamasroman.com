//! This software is licensed under the GNU General Public License, version 3 only.

'use strict'

// imports
import { Router } from 'express'
import ProjectController from '../controllers/project.js'

const router = Router()

// routes
router.post('/add-project', ProjectController.addProject)
router.get('/project/:id', ProjectController.getProjectById)
router.get('/projects', ProjectController.getAllProjects)
router.delete('/delete-project/:id', ProjectController.removeProject)

export default router
