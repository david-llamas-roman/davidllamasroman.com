/*
 * This file is part of davidllamasroman.com.
 *
 * davidllamasroman.com is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 *
 * davidllamasroman.com is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with davidllamasroman.com. If not, see <https://www.gnu.org/licenses/gpl-3.0.en.html>.
 *
 * Copyright (C) 2024 David Llamas Román
 */

'use strict'

// imports
import User from '../models/user.js'

const UserController = {
  // add user to database
  addUser: async function (req, res) {
    const user = new User()

    const params = req.body

    user.fullName = params.fullName
    user.email = params.email
    user.password = params.password

    try {
      const addedUser = await user.save()

      return res.status(200).send({ user: addedUser })
    } catch (e) {
      return res.status(500).send({
        message: 'Failed to add data',
        error: e,
      })
    }
  },
}

export default UserController
