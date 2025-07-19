/*
 * This file is part of davidllamasroman.com.
 *
 * davidllamasroman.com is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3 of the License only.
 *
 * davidllamasroman.com is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with davidllamasroman.com. If not, see <https://www.gnu.org/licenses/gpl-3.0.en.html>.
 *
 * Copyright (C) 2025 David Llamas Román
 */

'use strict'

import express from 'express'

import dotenv from 'dotenv'
dotenv.config()

import usersRouter from './routes/users.routes'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', usersRouter)

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`\nServer: http://localhost:${PORT}`)
})
