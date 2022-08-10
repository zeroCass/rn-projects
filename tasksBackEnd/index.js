const express = require('express')
const app = express()

const dotenv = require('dotenv').config()
const db = require('./config/db')
const consign = require('consign')

consign()
    .then('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(process.env.DB_PORT, () => {
    console.log(`Server Running - ${process.env.DB_PORT}`)
})