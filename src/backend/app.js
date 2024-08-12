'use strict'

// imports
import express from 'express'
import bodyParser from 'body-parser'

// execute express
const app = express()

// load route files

// middlewares
app.use(bodyParser.urlencoded({ extended: false })) //? necessary configuration, but why?
app.use(bodyParser.json()) // convert all to json

// cors

// routes
app.get('/', (req, res) => {
  res.status(200).send('Home page')
})

// exports
export default app
