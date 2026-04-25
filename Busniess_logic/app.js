// initalisation the express lib
const express = require("express");
const DataBase = require("./Configurations/Config.js");
const authRoutes = require("./Routers/AuthRouters/AuthRouters.js");


const cors = require("cors");


// initalisation the dotenv files
const dotenv = require("dotenv").config({ quiet: true });

// assiging a exprees too one variable
const app = express();

// assigin aport variable
const port = process.env.PORT || 4000;

// payload data vaild we use middlewares like

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// taking router from authroute file as middleware
app.use("/api", authRoutes);

// server function
const server = () => {
  console.log(`server is runing on http://localhost:${port}`);
};

// server is creating by using listen module it is in built from nodejs
app.listen(port, server);

// database function
DataBase();
