import User from "../../models/userModel"
import { UserData } from "../../types"
import bcrypt from 'bcryptjs'

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
        return {
            name: userCreated.name,
            email: userCreated.email
        }
    } catch (error:any) {
        throw new Error(error.message);
    }
}

export default registerUser