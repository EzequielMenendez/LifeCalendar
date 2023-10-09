import userModel from "../../models/userModel"
import { Response, Request } from 'express';
import bcrypt from 'bcryptjs'
import createToken from "../../libs/jwt";

const loginUser = async(req: Request, res: Response)=>{
    const { email, password } = req.body
    try {

        if(email.length > 40){
            res.status(400).json({message: "Email is too long"})
            return
        }

        const user = await userModel.findOne({email})

        if(!user){
            res.status(404).json({message: 'User not found'})
            return
        }
        const hash = await bcrypt.compare(password, user.password)

        if(!hash){
            res.status(400).json({ message: 'Incorrect password'})
            return
        }

        const token = await createToken({ id: user._id})

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        })
        res.status(200).json({message: 'User logged'})

    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}

export default loginUser