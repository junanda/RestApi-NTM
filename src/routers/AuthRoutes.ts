import BaseRouter from "./BaseRoutes";
import { Request, Response } from 'express'

import AuthController from "../controllers/AuthController";


class AuthRoutes extends BaseRouter {
    routes(): void {
        this.router.post("/", AuthController.login)
    }
    
}

export default new AuthRoutes().router