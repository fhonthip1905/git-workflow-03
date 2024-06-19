
const express = require("express");
const loginRouter = require("./Routes/login-route");
const regisRouter = require('./Routers/register-router')


const app = express();
app.use("/login", loginRouter);

app.use("/users",(req,res,next) => {
res.json({msg : "hello it's me"})
}) 

app.use(regisRouter)


app.listen(8000)



