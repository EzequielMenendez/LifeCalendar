import userModel from "../../models/userModel"

const getUser = async(id:string)=>{
    const user = await userModel.findById(id)
    return user
}

export default getUser