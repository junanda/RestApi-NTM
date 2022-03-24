import { Request, Response } from 'express'
import IController from './ControllerInterface'

class UserController implements IController {
    index(req: Request, res: Response): Response {
        const data:{} = {
            "success": true,
            "message": "Get All user data",
            "data": ""
        }
        return res.send(data)
    }
    create(req: Request, res: Response): Response {
        throw new Error('Method not implemented.')
    }
    detail(req: Request, res: Response): Response {
        throw new Error('Method not implemented.')
    }
    update(req: Request, res: Response): Response {
        throw new Error('Method not implemented.')
    }
    delete(req: Request, res: Response): Response {
        throw new Error('Method not implemented.')
    }
    
}

export default new UserController();