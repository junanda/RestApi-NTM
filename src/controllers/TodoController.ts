import { Request, Response } from 'express'
import IController from './ControllerInterface'

class TodoController implements IController{
    index(req: Request, res: Response): Response {
        const data= {
            success: true,
            message: "Get data Todos success",
            data: ""
        }

        return res.json(data)
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

export default new TodoController();