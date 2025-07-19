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

import { Strategy, ExtractJwt } from 'passport-jwt'
import boom from '@hapi/boom'
import config from '../../../config/config'
import UsersService from '../../users/services/users.service'

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
}

const JwtStrategy = new Strategy(options, async (payload, done) => {
  try {
    const user = await UsersService.findOneByUuid(payload.sub)
    if (!user) {
      done(boom.unauthorized(), false)
    }

    // eslint-disable-next-line no-unused-vars
    const { password: _, ...userSafe } = user.toJSON()

    done(null, userSafe)
  } catch (error) {
    done(error, false)
  }
})

export default JwtStrategy
