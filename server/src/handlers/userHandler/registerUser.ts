import User from "../../models/userModel"
import { UserData } from "../../types"

const registerUser = async(body: UserData)=>{
    const newUser = new User(body)
    return await newUser.save().then((data)=>data).catch((err)=>{throw new Error(err)})
}

export default registerUser