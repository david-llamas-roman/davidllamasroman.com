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
import Job from '../models/job.js'

const jobController = {
  // add job to database
  addJob: async function (req, res) {
    const job = new Job()

    const params = req.body

    job.title = params.title
    job.employmentType = params.employmentType
    job.companyName = params.companyName
    job.location = params.location
    job.locationType = params.locationType
    job.startDate = params.startDate
    job.endDate = params.endDate
    job.currentlyWorkingHere = params.currentlyWorkingHere

    try {
      const jobAdded = await job.save()

      return res.status(200).send({ job: jobAdded })
    } catch (e) {
      res.status(500).send({
        message: 'Failed to add the job',
        error: e,
      })
    }
  },
}

export default jobController
