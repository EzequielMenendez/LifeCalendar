import jwt from 'jsonwebtoken'

const createToken = (payload: object)=>{
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            'secret123',
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