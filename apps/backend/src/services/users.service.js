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

import { User } from '../../db/models/user.model.cjs'

import bcrypt from 'bcrypt'
import UserDao from '../daos/user.dao'

const UserService = {
  async _findOneByEmail(email) {
    return await UserDao.findOneByEmail(email)
  },
  async _exists(email) {
    return !!(await this._findOneByEmail(email))
  },
  async create(createUserDto) {
    const { fullName, email, password } = createUserDto

    if (!fullName || !email || !password) {
      const error = new Error(
        `'fullName', 'email' and 'password' are required.`,
      )
      error.status = 400
      throw error
    }

    const alreadyExists = await this._exists(email)
    if (alreadyExists) {
      const error = new Error(`User with email (${email}) already exists.`)
      error.status = 409
      throw error
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    })

    if (!newUser) {
      const error = new Error('Failed to create user.')
      error.status = 500
      throw error
    }

    const userPlain = newUser.toJSON()

    // eslint-disable-next-line no-unused-vars
    const { password: _, ...userSafe } = userPlain

    return userSafe
  },
  async update(uuid, updateUserDto) {
    if (!uuid) {
      const error = new Error(`Missing user 'uuid'.`)
      error.status = 400
      throw error
    }

    const user = await UserDao.findOneByUuid(uuid)
    if (!user) {
      const error = new Error(`User with 'uuid' (${uuid}) not found.`)
      error.status = 404
      throw error
    }

    const { fullName, email, password } = updateUserDto
    const updates = {}

    if (email && email !== user.email) {
      const alreadyUsed = await this._exists(email)

      if (alreadyUsed) {
        const error = new Error(
          `Another user with email (${email}) already exists.`,
        )
        error.status = 409
        throw error
      }

      updates.email = email
    }

    if (fullName) {
      updates.fullName = fullName
    }

    if (password) {
      updates.password = password
    }

    if (Object.keys(updates).length === 0) {
      const error = new Error('No valid fields to update.')
      error.status = 400
      throw error
    }

    const updatedUser = await UserDao.update(uuid, updates)
    if (!updatedUser) {
      const error = new Error(`Failed to update user with 'uuid' (${uuid}).`)
      error.status = 500
      throw error
    }

    const userPlain = updatedUser.toJSON()

    // eslint-disable-next-line no-unused-vars
    const { password: _, ...userSafe } = userPlain

    return userSafe
  },
}

export default UserService
