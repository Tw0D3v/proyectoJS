import User from "../model/User";


const checkValidator = async (req, res, next) => {
     try {
        const user = await User.findOne({ username: req.body.username });
        
        if (user)
            return res.status(401).json({ message: "The user already exists" });

        
            
        const email = await User.findOne({ email: req.body.email });

        if (email)
            return res.status(401).json({ message: "the email already exists" });
       
        next()
    } catch (error) {
        console.log(error);
        console.log(errors.msg);
    } 
   


}

export { checkValidator };