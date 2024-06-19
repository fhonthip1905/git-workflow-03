const express = require('express')
const regisRouter = require('./Routers/register-router')

const app = express()

app.use(regisRouter)

app.listen(8000)