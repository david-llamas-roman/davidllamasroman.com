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

import logger from '../logger.js'
import SystemWS from './system.ws.js'

const WebSocketRouter = {
  setup(wss) {
    wss.on('connection', (ws) => {
      logger.info('[WebSocket] Client connected')

      ws.on('message', async (message) => {
        try {
          const { type } = JSON.parse(message)
          logger.debug('[WebSocket] Received message type: %s', type)

          switch (type) {
            case 'system:subscribe':
              SystemWS.subscribe(ws)
              break
            default:
              logger.warn('[WebSocket] Unknown message type: %s', type)
              ws.send(
                JSON.stringify({
                  type: 'error',
                  payload: 'Unrecognized message type',
                }),
              )
          }
        } catch (error) {
          logger.error(
            '[WebSocket] Error processing message: %s',
            error.message,
            { error },
          )
        }
      })
    })
  },
}

export default WebSocketRouter
