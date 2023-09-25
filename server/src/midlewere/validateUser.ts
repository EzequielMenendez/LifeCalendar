import { Response, Request, NextFunction } from 'express'
import { ValidationSchema, zodError } from '../types'

const validateSchema = (schema:ValidationSchema) => (req:Request, res:Response, next:NextFunction) =>{
    try {
        schema.parse(req.body)
        next()
    } catch (error:any) {
        res.status(400).json({error: error.errors.map((err:zodError) => err.message)})
        return 
    }
}

export default validateSchema