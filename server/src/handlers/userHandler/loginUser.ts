import userModel from "../../models/userModel"

const loginUser = async(id:string)=>{
    const user = await userModel.findById(id)
    return user
}

export default loginUser