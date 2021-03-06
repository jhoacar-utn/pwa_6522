//Script que configura la conexión a la base de datos

require('dotenv').config();

const express = require('express');
const cookieSession = require('cookie-session')

const app = express();
const {nameCookie, keyCookie} = require('./config/cookies')

// configure the app to use bodyParser()
app.use(express.urlencoded({ extended: true })); //This enables the request.query for GET requests
//app.use(bodyParser.json()); //This enables the request.body for POST requests
app.use(express.json());    // <==== parse request body as JSON;

app.use(cookieSession({name: nameCookie, keys: [keyCookie]}));

app.set('view engine','ejs');

const apiRoute = require("./routes/api");
const webRoute = require("./routes/web");

app.use("/api",apiRoute); //todas las rutas que voy a usar
app.use("/",webRoute);
app.use("/user",express.static(__dirname+"/storage"));

module.exports = app;