import BaseRouter from "./BaseRoutes";
import { Request, Response } from 'express'

// Controller
import UserController from "../controllers/UserController";

class UserRoutes extends BaseRouter {

    public routes(): void {
        this.router.get("/", UserController.index)
        this.router.post("/", UserController.create)
    }
    
}

export default new UserRoutes().router;