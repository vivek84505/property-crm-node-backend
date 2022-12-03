const express = require("express");
const Routes = require("./Routes");
const app = express();
const jwt = require('jsonwebtoken');

const port = 5000;

app.use(express.json());

 

app.use("/api/v1/", Routes);

app.listen(port, () => console.log(`App Listening on port ${port}`));
