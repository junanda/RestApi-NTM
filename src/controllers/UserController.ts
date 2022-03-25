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
        const { name, username, password, role } = req.body
        const data = {
            success: true,
            message: "create new user success",
            data: {name, username, password, role}
        }

        return res.json(data)
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