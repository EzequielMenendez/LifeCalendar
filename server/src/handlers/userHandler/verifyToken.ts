import { Response, Request } from 'express';
import User from "../../models/userModel"
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../../config';
import { NewUserData } from '../../types';

const verifyToken = async(req:Request, res:Response) =>{
    const {token} = req.cookies

    if(!token){
        res.status(401).json({message: "Unauthrized"})
        return
    }
    jwt.verify(token, TOKEN_SECRET, async(err:any, user:any)=>{
        if(err){
            res.status(401).json({message: "Unauthrized"})
            return
        }
        const userFound:NewUserData | null = await User.findById(user.id)
        if(!userFound){
            res.status(401).json({message: "Unauthrized"})
            return
        }

        return res.status(200).json({
            id: userFound._id,
            name: userFound.name,
            email: userFound.email
        })
    })
}

export default verifyToken