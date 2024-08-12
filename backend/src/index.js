//! This software is licensed under the GNU General Public License, version 3 only.

'use strict'

// imports
import mongoose from 'mongoose'
import app from './app.js'

// port
const port = 3700

// database connection
mongoose
  .connect('mongodb://localhost:27017/dlr-website')
  .then(() => {
    console.log('Database connection established correctly')

    // server creation
    app.listen(port, () => {
      console.log('The server is running correctly in localhost:3700')
    })
  })
  .catch((e) => console.log(e))
