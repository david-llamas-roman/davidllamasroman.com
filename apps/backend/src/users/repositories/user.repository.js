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

const UserRepository = {
  async findOneByEmail(email) {
    return await User.findOne({ email })
  },
  async findOneByUuid(uuid) {
    return await User.findOne({ uuid })
  },
  async create({ fullName, email, password }) {
    return await User.create({ fullName, email, password })
  },
  async update(uuid, updateData) {
    const [affectedRows, [updatedUser]] = await User.update(updateData, {
      where: { uuid },
      returning: true,
    })

    if (affectedRows === 0) {
      return null
    }

    return updatedUser
  },
}

export default UserRepository
