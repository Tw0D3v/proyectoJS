import jwt, { decode } from "jsonwebtoken";
import config from "../config"

export const verifyToken = async (req, res, next) => {
    try {
     const token = req.headers['x-access-token'];
 
     if (!token) return res.status(403).json({ message: "No token provided" })
 
     const decoded = jwt.verify(token, config.SECRET)
     req.userId = decoded.id;
 
     const user = await User.findById(req.userId, { password: 0 })
 
     if (!user) return res.status(404).json({ message: "no user found" })
 
 
     console.log(decoded)
     next()
    } catch (error) {
     res.status(401).json({message:"no autorizado"})
    }
 };