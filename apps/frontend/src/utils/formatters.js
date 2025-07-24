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

import logger from './logger.js'

const getFormattedDate = (date = new Date()) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const dayName = days[date.getDay() - 1]
  const dayNumber = date.getDate().toString().padStart(2, '0')
  const monthName = months[date.getMonth()]
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return `${dayName} ${dayNumber} ${monthName} ${hours}:${minutes}`
}

const subscribeSystemData = (onData) => {
  const wsUrl = import.meta.env.VITE_WS_URL

  if (!wsUrl) {
    logger.error('[getBattery] WebSocket url not defined (VITE_WS_URL)')
    return
  }

  const socket = new WebSocket(wsUrl)

  socket.addEventListener('open', () => {
    logger.log('[getBattery] WebSocket connected')
    socket.send(JSON.stringify({ type: 'system:subscribe' }))
  })

  socket.addEventListener('message', (event) => {
    try {
      const { type, payload } = JSON.parse(event.data)

      if (type === 'system:update') {
        onData(payload)
      }
    } catch (error) {
      logger.error('[getBattery] Failed to parse message:', error)
    }
  })

  socket.addEventListener('error', (event) => {
    logger.error('[getBattery] WebSocket error:', event)
  })

  socket.addEventListener('close', () => {
    logger.warn('[getBattery] WebSocket closed')
  })

  return socket
}

const getBatteryPercent = (onUpdate) => {
  return subscribeSystemData((payload) => {
    const level = payload?.battery?.percent ?? 0
    onUpdate?.(Math.round(level))
  })
}

export { getFormattedDate, getBatteryPercent }
