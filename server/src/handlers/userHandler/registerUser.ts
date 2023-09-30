import User from "../../models/userModel"
import bcrypt from 'bcryptjs'
import { Response, Request } from 'express';
import createToken from "../../libs/jwt";
import { NewUserData } from "../../types";

const registerUser = async(req: Request, res: Response)=>{
    try {
        const { name, email, password } = req.body

        const userFound:NewUserData | null  = await User.findOne({email})
        if(userFound){
            res.status(400).json({message: "The email alredy exists"})
            return
        }

        const hash:string = await bcrypt.hash(password, 10)
    
        const newUser = new User({
            name,
            email,
            password: hash
        })
    
        const userCreated:NewUserData = await newUser.save()

        const token = await createToken({id: userCreated._id})
        res.cookie("token", token)
        res.status(201).json({
            name: userCreated.name,
            email: userCreated.email,
            id: userCreated._id
        })

    } catch (error:any) {
        res.status(500).json({error: error.message})
    }
}

export default registerUser