//! This software is licensed under the GNU General Public License, version 3 only.

'use strict'

// imports
import mongoose, { Schema } from 'mongoose'

// project schema
const project = Schema({
  name: String,
  description: String,
  website: String,
  gitHubRepositoryUrl: String,
  startDate: Date,
  endDate: Date,
})

export default mongoose.model('Project', project)
