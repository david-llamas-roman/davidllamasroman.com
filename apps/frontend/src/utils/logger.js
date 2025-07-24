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

// eslint-disable-next-line no-undef
const env = import.meta.env.VITE_ENV || 'development'

const levels = {
  development: { log: true, debug: true, warn: true, error: true },
  staging: { log: false, debug: true, warn: true, error: true },
  production: { log: false, debug: false, warn: true, error: true },
}

const logger = {
  log: (...args) => levels[env].log && console.log('[LOG]', ...args),
  info: (...args) => levels[env].info && console.info('[INFO]', ...args),
  debug: (...args) => levels[env].debug && console.debug('[DEBUG]', ...args),
  warn: (...args) => levels[env].warn && console.warn('[WARN]', ...args),
  error: (...args) => levels[env].error && console.error('[ERROR]', ...args),
}

export default logger
