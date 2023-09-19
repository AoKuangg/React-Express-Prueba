import { Router } from "express";

const user = Router()

user.get("/",(req,res)=>{
    res.status(200).json({message:"OLA :V"})
});

export default user;