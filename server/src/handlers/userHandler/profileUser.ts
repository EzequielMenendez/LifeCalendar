import { Response, Request } from 'express';
import User from "../../models/userModel"

const profileUser = async(req: Request, res: Response) =>{
    const user = await User.findById(req.user?.id)
    if(!user){
        res.status(404).json({message: 'User not found'})
        return
    }

    return res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email
    })
}
export default profileUser