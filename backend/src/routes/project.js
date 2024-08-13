//! This software is licensed under the GNU General Public License, version 3 only.

'use strict'

// imports
import { Router } from 'express'
import ProjectController from '../controllers/project.js'

const router = Router()

// routes
router.get('/add-project', ProjectController.addProject)

export default router
