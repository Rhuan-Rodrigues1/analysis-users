const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routes/router')


const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use(router)

module.exports = { app }