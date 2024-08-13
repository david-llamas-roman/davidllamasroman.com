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
