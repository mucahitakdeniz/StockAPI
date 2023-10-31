"use strict"

const express = require('express')
const app = express()

require('dotenv').config()
const HOST =process.env?.HOST || '127.0.0.1'
const PORT =process.env?.PORT || 8000

require('express-async-errors')

// Connect to DB:
require('./src/configs/dbConnection')()

app.use(express.json())

// Run Logger:
app.use(require('./src/middlewares/logger'))

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))

//routes
app.use(require('./src/routes'))

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`))
