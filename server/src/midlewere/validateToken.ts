import { Response, Request, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config'

declare global {
    namespace Express {
      interface Request {
        user?: JwtPayload;
      }
    }
}

const authRequired = (req: Request, res:Response, next:NextFunction) =>{
    const {token} = req.cookies
    if(!token){
        res.status(401).json({message: 'no token, authorization denied'})
        return
    }
    jwt.verify(token, TOKEN_SECRET, (err: any, decoded: any) => {
        if (err || !decoded) {
            res.status(401).json({ message: 'invalid token, authorization denied' })
            return
        }
        req.user = decoded
        next()
    })
}

export default authRequired