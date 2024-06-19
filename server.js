
const express = require("express");
const loginRouter = require("./Routes/login-route");
const regisRouter = require('./Routers/register-router')


const app = express();
app.use("/login", loginRouter);

app.use(regisRouter)

app.listen(8000)
