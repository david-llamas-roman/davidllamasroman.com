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

import dotenv from 'dotenv'

const env = process.env.NODE_ENV || 'development'

dotenv.config({ path: `.${env}.env` })

const config = {
  env,
  port: process.env.PORT || 3000,
  dbName: process.env.MARIADB_DATABASE,
  dbUser: process.env.MARIADB_USER,
  dbPassword: process.env.MARIADB_PASSWORD,
  dbHost: process.env.MARIADB_HOST,
  dbPort: process.env.MARIADB_PORT,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
}

export default config
