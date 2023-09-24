import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config'

const createToken = (payload: object)=>{
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d"
            },
            (err:any, token)=>{
                if(err)reject(err)
                resolve(token)
            }
        )
    })
}

export default createToken