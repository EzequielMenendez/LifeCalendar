import { Response, Request } from 'express';

const logoutUser = async(_req: Request, res: Response)=>{
    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.sendStatus(200);
}

export default logoutUser