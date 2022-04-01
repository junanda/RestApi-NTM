import { Request, Response, NextFunction } from "express";


const responseHandler = (req: Request, res:Response, next:NextFunction | null = null ):void => {
    if (res.json === undefined){
        res.json = (data:any):any => {
            res.setHeader('Content-type', 'application/json')
            res.end(JSON.stringify(data))
        };
    }

    const respond = (data:any | null = null, status:number = 200, message:string = '' ) => {
        res.statusCode = status
        if(data === null){
            res.end(message)
        }else{
            res.json(data)
        }
    }
}