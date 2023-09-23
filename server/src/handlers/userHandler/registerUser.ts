import User from "../../models/userModel"
import bcrypt from 'bcryptjs'
import { Response, Request } from 'express';
import createToken from "../../libs/jwt";

const registerUser = async(req: Request, res: Response)=>{
    try {
        const { body } = req
        const { name, email, password } = body

        const hash:string = await bcrypt.hash(password, 10)
    
        const newUser = new User({
            name,
            email,
            password: hash
        })
    
        const userCreated = await newUser.save()

        const token = await createToken({id: userCreated._id})
        res.cookie("token", token)
        res.status(201).json({message: 'User created successfully'})

    } catch (error:any) {
        res.status(500).json({error: error.message})
    }
}

export default registerUser