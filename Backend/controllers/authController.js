const User=require("../models/Users.js");
const {success, error}=require("../utils/responseWrapper.js")


const signupController = async (req, res)=>{
    const {name, email, password}=req.body;

try{
    if(!name || !password || !email){
        res.send(error(400, "All fields are required"));
    }

    const oldUser=await User.findOne({email});
    if(oldUser){
        return res.send(error(409, "User already exists"));
    }

    const hashedPassword=await bcrypt.hash(password, 10); 

    const user=await User.create({
        name,
        email,
        password:hashedPassword
    })

}
catch (e) {
    res.send(error(500, e.message));
 }


    return res.send(success(201, "User Created"));
}

const loginController = async (req,res)=>{
        const {email, password}=req.body;   
    
    try{
        if(!email || !password){
            return res.send(error(400, "All fields are required"));
        }

        const user=await User.findOne({email}).select("+password"); 
        if(!user){
            return res.send(error(404, "User not registered"));
        }
     
        const matched=await bcrypt.compare(password, user.password);
        if(!matched){
            return res.send(error(403, "Incorrrect Password"));
        }
    }
    catch(e){
        console.log(e);
    }


}




module.exports={signupController, loginController}