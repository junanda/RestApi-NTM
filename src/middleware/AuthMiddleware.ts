import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const auth = (req:Request, res:Response, next:NextFunction): any => {
    if(!req.headers.authorization){
        return res.status(401).send("Not Authenticated")
    }

    const secret = process.env.JWT_SECRET_KEY || "mapsecret12type"
    const token = req.headers.authorization.split(" ")[1]

    try {
        const credential:string | object = jwt.verify(token, secret)
        if(credential){
            req.app.locals.credential = credential
            return next()
        }

        return res.send('Token Invalid!')
    } catch (error) {
        return res.send(error)
    }
}