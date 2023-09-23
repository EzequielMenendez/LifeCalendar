import User from "../../models/userModel"
import { UserData } from "../../types"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const registerUser = async(body: UserData)=>{
    try {
        const { name, email, password } = body

        const hash:string = await bcrypt.hash(password, 10)
    
        const newUser = new User({
            name,
            email,
            password: hash
        })
    
        const userCreated = await newUser.save()

        const token = await jwt.sign(
            {
                id: userCreated._id
            },
            'secret123',
            {
                expiresIn: "1d"
            }
        )

        return token

    } catch (error:any) {
        throw new Error(error.message);
    }
}

export default registerUser