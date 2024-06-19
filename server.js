const express = require('express')
const regisRouter = require('./Routers/register-router')

const app = express()

app.use("/users",(req,res,next) => {
res.json({msg : "hello it's me"})
}) 

app.use(regisRouter)


app.listen(8000)