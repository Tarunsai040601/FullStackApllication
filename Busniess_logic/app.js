// initalisation the express lib
const express = require("express");
const DataBase = require("./Configurations/Config.js");

// initalisation the dotenv files
const dotenv = require("dotenv").config({ quiet: true });

// assiging a exprees too one variable
const app = express();

const port = process.env.PORT || 4000;

// server function
const server = () => {
  console.log(`server is runing on http://localhost:${port}`);
};
// server is creating by using listen module it is in built from nodejs
app.listen(port, server);

// database function
DataBase()
