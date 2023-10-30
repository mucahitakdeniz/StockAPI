"use strict"

const express = require('express')
const app = express()

require('dotenv').config()
const HOST =process.env?.HOST || '127.0.0.1'
const PORT =process.env?.PORT || 8000

require('express-async-errors')

require('./src/configs/dbConnection')()

app.use(express.json())

app.use(require('./src/middlewares/logger'))

app.use(require('./src/middlewares/findSearchSortPage'))

// errorHandler:
app.use(require('./src/middlewares/findSearchSortPage'))

// RUN SERVER:
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`))
