import { Request, Response } from 'express'
import IController from './ControllerInterface'
import MemberService from '../services/MemberServices'
import { responseSerialize, failNotFound } from '../utils/helper'

class UserController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const service:MemberService = new MemberService(req)
        
        const members = await service.getAll()

        const data = responseSerialize(members, res.statusCode, true)

        return res.json(data)
    }

    create = async (req: Request, res: Response):Promise<Response> =>  {
        const service:MemberService = new MemberService(req)

        const new_data = await service.store()

        const status = responseSerialize(new_data, res.statusCode, true)

        return res.json(status)
    }

    detail = async (req: Request, res: Response): Promise<Response> => {
        const service:MemberService = new MemberService(req)

        const data = await service.getOne()

        const result = responseSerialize(data, res.statusCode, true)

        return res.json(result)
    }

    update = async (req: Request, res: Response): Promise<Response> => {
        const service:MemberService = new MemberService(req)

        const up = await service.update()

        if(up[0]){
            const success = responseSerialize(up, res.statusCode, true)
            return res.json(success)
        }

        const fail = failNotFound("Resource Not Found", 404)

        return res.json(fail)
        // throw new Error('Method not implemented.')
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        const service: MemberService = new MemberService(req)
        
        const del_data = await service.delete()
        // throw new Error('Method not implemented.')
        if(del_data){
            const success =  responseSerialize(null, res.statusCode, true)
            return res.json(success)
        }
        
        const failed = failNotFound("Delete data failed", 200)
        return res.json(failed)
    }

    getRole = async (req: Request, res: Response):Promise<Response> => {
        const service:MemberService = new MemberService(req)

        const data = await service.getRoleUser()

        const result = responseSerialize(data, res.statusCode, true)

        return res.json(result)
    }
    
}

export default new UserController();