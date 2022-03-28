import { Request, Response } from 'express'

// Controller
import MemberService from '../services/MemberServices'
import Authentication from '../utils/Authentication'


class AuthController {
    login = async (req: Request, res: Response):Promise<Response> => {
        const {username, password} = req.body
        
        const service:MemberService = new MemberService(req)
        
        const user = await service.checkUsername(username)

        if (user){

            const check = await Authentication.passCheck(password, user.password)

            if(check){
                return res.json({
                    success: true,
                    message: "Login Success",
                    data: user
                })
            }
            
            return res.json({
                success: false,
                message: "Auth failed!!!",
                data: ""
            })
        
        }

        return res.json({
            success: true,
            message: "Anda belum melakukan registrasi",
            data: ""
        })
    }
}

export default new AuthController();