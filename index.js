'use strict'

// imports
import mongoose from 'mongoose'

// database connection
mongoose.Promise = global.Promise
mongoose
  .connect('mongodb://localhost:27017/portfolio')
  .then(() => {
    console.log('Database connection established correctly')
  })
  .catch((e) => console.log(e))
