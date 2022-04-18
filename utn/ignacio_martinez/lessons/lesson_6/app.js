const express = require('express');


const app = express();

app.get("/",(req,res)=>{
    return res.json({message:"welcome"});
})




app.listen(8000,()=>{
    console.log("Servidor corriendo en el puerto 8000");
})