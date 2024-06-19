const express = require("express");
const loginRouter = require("./Routes/login-route");

const app = express();

app.use("/login", loginRouter);

app.listen(8000);
