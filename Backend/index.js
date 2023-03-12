const express=require('express');
const DBconnect = require('./DBconnect');
const authRouter=require("./routers/authRouter");

const app=express();

//Middlewares
app.use(express.json());

app.use("/auth", authRouter);



app.get("/", (req, res)=>{
    res.send("OK from Server");
})



DBconnect();
app.listen(5000, ()=>{
    console.log("Listening on Port: ", 5000);
})