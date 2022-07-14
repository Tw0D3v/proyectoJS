import User from "../model/User";
import jwt from 'jsonwebtoken';
import config from "../config";

export  const registerUser = async (req,res) =>{
    try {
        const  {username,email,password} = req.body; 
        const newuser = new User({
            username,email,password
        }) 
        
        const savedUser = await newuser.save();
        res.status(200).json(savedUser);
        const token = jwt.sign({ id: savedUser._id }, config.SECRET, {expiresIn: 86400})

        res.status(200).json({ token })

    } catch (error) {
        console.log(error);
        
    }
    
}


export const signin = async (res,req)=>{
    const  userFound = await User.findOne({email: req.body.email});

    if(!userFound){
        return res.status(404).json({Message:'User not found'})
    }
    
    
const validate_pass = await User.comparePassword(req.body.password, userFound.password)

if(validate_pass){
    return res.status(401).json({token:null,Message:"password does not match"})
}
const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400 });
}


  export const getUsers = async (req, res) => {};