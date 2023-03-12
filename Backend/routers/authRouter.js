const route=require('express').Router();
const authController=require("../controllers/authController.js");

route.post("/signup", authController.signupController); 

module.exports=route;