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

import { CreateUserDto, UpdateUserDto } from '../dtos/user.dtos'
import UsersService from '../services/users.service'

const UsersController = {
  async create(req, res) {
    try {
      const validatedData = CreateUserDto.parse(req.body)
      const user = await UsersService.create(validatedData)
      return res.status(201).json({ user })
    } catch (error) {
      const status = error.status || 500
      return res.status(status).json({
        message: error.message || 'Failed to create user',
        errors: error.errors || undefined,
      })
    }
  },
  async update(req, res) {
    try {
      const uuid = req.params.uuid
      const validatedData = UpdateUserDto.parse(req.body)
      const user = await UsersService.update(uuid, validatedData)
      return res.status(200).json({ user })
    } catch (error) {
      const status = error.status || 500
      return res.status(status).json({
        message: error.message || 'Failed to update user',
        errors: error.errors || undefined,
      })
    }
  },
}

export default UsersController
