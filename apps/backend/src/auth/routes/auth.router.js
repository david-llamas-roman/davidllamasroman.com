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
import checkApiKey from '../../common/middlewares/checkApiKey.middleware.js'
import config from '../../../config/config.js'
import {
  signAccessToken,
  signRefreshToken,
  verifyToken,
} from '../token-sign.js'

const router = Router()
const ROOT = '/auth'

router.post(
  `${ROOT}/login`,
  checkApiKey,
  passport.authenticate('local', { session: false }, async (req, res, next) => {
    try {
      const user = req.user
      const payload = {
        sub: user.uuid,
      }

      const accessToken = signAccessToken(payload)
      const refreshToken = signRefreshToken(payload)

      res
        .cookie('auth-access-token', accessToken, {
          httpOnly: true,
          secure: config.env === 'production' || config.env === 'staging',
          sameSite: 'strict',
          maxAge: 15 * 60 * 1000 /* 15m */,
        })
        .cookie('auth-refresh-token', refreshToken, {
          httpOnly: true,
          secure: config.env === 'production' || config.env === 'staging',
          sameSite: 'strict',
          maxAge: 7 * 24 * 60 * 60 * 1000 /* 7d */,
        })
        .json({ user })
    } catch (error) {
      next(error)
    }
  }),
)

router.post(`${ROOT}/refresh`, checkApiKey, (req, res, next) => {
  const refreshToken = req.cookies['auth-refresh-token']
  if (!refreshToken) {
    return res.status(401).json({ message: 'No refresh token' })
  }

  try {
    const payload = verifyToken(refreshToken)
    const newAccessToken = signAccessToken(payload)

    res
      .cookie('auth-access-token', newAccessToken, {
        httpOnly: true,
        secure: config.env === 'production' || config.env === 'staging',
        sameSite: 'strict',
        maxAge: 15 * 60 * 1000 /* 15m */,
      })
      .json({ ok: true })
  } catch (error) {
    next(error)
  }
})
