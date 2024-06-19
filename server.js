const express = require('express')

const app = express()


app.use("/users",(req,res,next) => {
res.json({msg : "hello it's me"})
}) 

app.listen(8000)