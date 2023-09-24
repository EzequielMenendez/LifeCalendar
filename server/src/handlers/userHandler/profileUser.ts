import { Response, Request } from 'express';

const profileUser = (req: Request, res: Response) =>{
    res.send(req.user)
}

export default profileUser