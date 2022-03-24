import BaseRouter from "./BaseRoutes";
import { Request, Response } from 'express'

// Controller
import UserController from "../controllers/UserController";

class UserRoutes extends BaseRouter {

    public routes(): void {
        this.router.get("/", UserController.index)
    }
    
}

export default new UserRoutes().router;