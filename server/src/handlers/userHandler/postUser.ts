import userModel from "../../models/userModel"
import { UserData } from "../../types"

const postUser = async(body: UserData)=>{
    const user = await new userModel(body);
    user.save().then((data)=>data).catch((err)=>{throw new Error(err)})
}

export default postUser