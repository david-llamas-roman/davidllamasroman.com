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

/* eslint-disable no-undef */

'use strict'

import http from 'http'
import config from '../config/config.js'
import app from './index.js'
import logger from './logger.js'
import { WebSocketServer } from 'ws'
import WebSocketRouter from './ws/index.js'

const PORT = config.port || 3000
const NODE_ENV = config.env || 'development'

const server = http.createServer(app)

const wss = new WebSocketServer({ server })
WebSocketRouter.setup(wss)

server.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT} [${NODE_ENV}]`)
})
