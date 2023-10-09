import { Response, Request } from 'express';

const logoutUser = async(req: Request, res: Response)=>{
    res.cookie("token", "", {
        expires: new Date(0)
    })
    req.user = undefined
    return res.sendStatus(200);
}

export default logoutUser