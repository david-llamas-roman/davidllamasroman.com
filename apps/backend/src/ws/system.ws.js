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
import SystemController from '../system/controllers/system.controller.js'

const isStatsEqual = (a, b) => {
  if (!a || !b) return false

  return JSON.stringify(a) === JSON.stringify(b)
}

const SystemWS = {
  subscribe(ws) {
    logger.debug('[SystemWS] Subscribing client to system stats updates')

    let lastStatsSent = null

    const interval = setInterval(async () => {
      try {
        const stats = await SystemController.getStats()

        if (!isStatsEqual(stats, lastStatsSent)) {
          ws.send(JSON.stringify({ type: 'system:update', payload: stats }))
          lastStatsSent = stats
          logger.debug('[SystemWS] Stats sent to client')
        } else {
          logger.debug('[SystemWS] Stats not sent (no changes)')
        }
      } catch (error) {
        logger.error('[SystemWS] Failed to send stats: %s', error.message, {
          error,
        })
      }
    }, 2000)

    ws.on('close', () => {
      clearInterval(interval)
      logger.info('[SystemWS] Client disconnected from system stats')
    })
  },
}

export default SystemWS
