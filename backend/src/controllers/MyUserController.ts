import { Request,Response } from "express";
import User from "../models/user";


const createCurrentUser= async (req: Request, res: Response)=>{
// check if the user exists
//create the user if it does not exist

//return the user
    try {
        const {auth0Id}=req.body;
        const existingUser= await User.findOne({auth0Id});
        if(existingUser){
            return res.status(200).send();
        }
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json( //201=> created user
            newUser.toObject()
        );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error Creating user",
        });  
    }
};
export default {
    createCurrentUser,
};