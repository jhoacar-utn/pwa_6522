require('dotenv').config();

const express = require('express');
const app = express();
//const bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(express.urlencoded({ extended: true })); //This enables the request.query for GET requests
//app.use(bodyParser.json()); //This enables the request.body for POST requests
app.use(express.json());    // <==== parse request body as JSON;

const {connectToServer} = require("./config/mongo/connection");
const apiRoute = require("./routes/api");
const webRoute = require("./routes/web");

const PORT = process.env.PORT || 5000;

app.use("/api",apiRoute);
app.use("/",webRoute);

app.listen(PORT, ()=> {
    console.log('Server on port: '+PORT);

    connectToServer().then(()=>{
        console.log("Connection established");
    }).catch((error)=>{
        console.log("Connection rejected");
        console.log(error)
    })
});