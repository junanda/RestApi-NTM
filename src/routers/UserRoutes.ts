import BaseRouter from "./BaseRoutes";
import { Request, Response } from 'express'

class UserRoutes extends BaseRouter {

    public routes(): void {
        this.router.get("/", (req:Request, res:Response) => {
            const data:{} = {
                "success": true,
                "message": "Get All user data",
                "data": ""
            }
            res.send(data)
        })
    }
    
}

export default new UserRoutes().router;