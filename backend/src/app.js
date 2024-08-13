//! This software is licensed under the GNU General Public License, version 3 only.

'use strict'

// imports
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
// -> load routes files
import projectRoutes from './routes/project.js'

// execute express
const app = express()

// middlewares
app.use(bodyParser.urlencoded({ extended: false })) //? necessary configuration, but why?
app.use(bodyParser.json()) // convert all to json

// cors
app.use(cors())

// routes
app.use('/api', projectRoutes)

// exports
export default app
