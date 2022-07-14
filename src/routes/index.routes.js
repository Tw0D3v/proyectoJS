import { Router } from "express";
import {checkValidator} from "../middlewares/middlewares"
import * as usersCtrl  from "../controllers/user.controllers"
import validatorRegister from "../validators/auth";

/* const router = Router();

router.get('/', (req, res) => {
  
    res.status(301).render('index');
   
})

router.post("/",validatorRegister,checkValidator,usersCtrl.registerUser,(res,req)=>{
    res.status(301).render('register')
}); */
/* 
router.get('/register',(req,res)=>{
    res.render('register.ejs');
})*/
router.post('/',(req,res)=>{
    res.render('register');
}) 

export default router