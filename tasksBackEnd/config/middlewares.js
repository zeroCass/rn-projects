const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.json()) // for parsing application/json
    app.use(cors({
        origin: '*',
    }))
}