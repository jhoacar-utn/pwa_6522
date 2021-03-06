const express = require("express");
const { getDb } = require("./config/mongo/connection");
const app = express();

const route_users = require("./routes/userRouter");

const PORT = 5000;


const handleRequest = (request,response,next)=>{
    const database = getDb();
    //Constate de NODE => __dirname
    response.sendFile(__dirname+"/views/index.html");
}

app.get("/",handleRequest);

app.use("/user",route_users);


app.listen(PORT,()=>{
    console.log("Server on port "+PORT);
});