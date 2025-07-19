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

import { Router } from 'express'
import passport from 'passport'
import { signToken } from '../token-sign'

const router = Router()
const ROOT = '/auth'

router.post(
  `${ROOT}/login`,
  passport.authenticate('local', { session: false }, async (req, res, next) => {
    try {
      const user = req.user
      const payload = {
        sub: user.uuid,
      }
      const token = signToken(payload)

      res.json({
        user,
        token,
      })
    } catch (error) {
      next(error)
    }
  }),
)
