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

import { Strategy } from 'passport-local'
import UsersService from '../../users/services/users.service.js'
import boom from '@hapi/boom'
import bcrypt from 'bcrypt'

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
  },
  async (email, password, done) => {
    try {
      const user = await UsersService.findOneByEmail(email)
      if (!user) {
        done(boom.unauthorized(), false)
      }

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        done(boom.unauthorized(), false)
      }

      const userPlain = user.toJSON()

      // eslint-disable-next-line no-unused-vars
      const { password: _, ...userSafe } = userPlain

      done(null, userSafe)
    } catch (error) {
      done(error, false)
    }
  },
)

export default LocalStrategy
