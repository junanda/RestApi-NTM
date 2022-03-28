import { Request, Response } from 'express'
import IController from './ControllerInterface'
import MemberService from '../services/MemberServices'

class UserController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const service:MemberService = new MemberService(req)
        
        const members = await service.getAll()

        const data:{} = {
            "success": true,
            "message": "Get All user data",
            "data": members
        }
        return res.send(data)
    }

    create = async (req: Request, res: Response):Promise<Response> =>  {
        const service:MemberService = new MemberService(req)

        const new_data = await service.store()

        const data = {
            success: true,
            message: "create new user success",
            data: new_data
        }

        return res.json(data)
    }

    detail = async (req: Request, res: Response): Promise<Response> => {
        const service:MemberService = new MemberService(req)

        const data = await service.getOne()

        return res.json({
            success: true,
            message: "get detail data success",
            data: data
        })
    }

    update = async (req: Request, res: Response): Promise<Response> => {
        const service:MemberService = new MemberService(req)

        const up = await service.update()

        if(up[0]){
            return res.json({
                success: true,
                message: "Update data success",
                data: up
            })
        }

        return res.status(404).json({
            success: false,
            message: `data id ${req.params.id} not found`,
            data: ""
        })
        // throw new Error('Method not implemented.')
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        const service: MemberService = new MemberService(req)
        
        const del_data = await service.delete()
        // throw new Error('Method not implemented.')
        if(del_data){
            return res.json({
                success: true,
                message: "Delete data success",
                data: ""
            })
        }
        
        return res.json({
            success: false,
            message: 'delete data failed',
            data: []
        })
    }

    getRole = async (req: Request, res: Response):Promise<Response> => {
        const service:MemberService = new MemberService(req)

        const data = await service.getRoleUser()

        return res.json({
            success: true,
            message: `Get data ${req.params.role} role`,
            data: data
        })
    }
    
}

export default new UserController();