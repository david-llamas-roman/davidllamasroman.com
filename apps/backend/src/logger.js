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

'use server'

import { createLogger, format, transports } from 'winston'
import config from '../config/config.js'

const { combine, timestamp, printf, colorize, errors, json } = format

const env = config.env || 'development'

const devFormat = combine(
  colorize(),
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  errors({ stack: true }),
  printf(({ timestamp, level, message, stack }) => {
    return stack
      ? `[${timestamp} ${level}: ${message} - ${stack}]`
      : `[${timestamp} ${level}: ${message}]`
  }),
)

const prodFormat = combine(timestamp(), errors({ stack: true }), json())

const logger = createLogger({
  level: env === 'development' ? 'debug' : env === 'staging' ? 'info' : 'warn',
  format: env === 'development' ? devFormat : prodFormat,
  defaultMeta: { service: 'system-service', env },
  transports: [new transports.Console()],
})

export default logger
