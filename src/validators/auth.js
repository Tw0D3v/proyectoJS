import { check } from "express-validator";
import validateResults from "../utils/handleValidator";

const validatorRegister=[
    check('username')
    .exists()
    .notEmpty()
    .isLength({min:3,max:90}),
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),
    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3,max:99}),
    
    (req,res,next)=>{
        return validateResults(req,res,next)
    }

    
]

export default validatorRegister;