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

import z from 'zod'

const CreateUserDto = z.object({
  fullName: z
    .string()
    .min(1, `'fullName' is required`)
    .max(100, `'fullName' must be 100 characters or less`),
  email: z
    .email('Invalid email')
    .max(255, `'email' must be 255 characters or less`),
  password: z
    .string()
    .min(8, `'password' must be at least 8 characters`)
    .max(100, `'password' must be 100 characters or less`),
})

const UpdateUserDto = z.object({
  fullName: z
    .string()
    .min(1, `'fullName' is required`)
    .max(100, `'fullName' must be 100 characters or less`)
    .optional(),
  email: z
    .email('Invalid email')
    .max(255, `'email' must be 255 characters or less`)
    .optional(),
  password: z
    .string()
    .min(8, `'password' must be at least 8 characters`)
    .max(100, `'password' must be 100 characters or less`)
    .optional(),
})

export { CreateUserDto, UpdateUserDto }
