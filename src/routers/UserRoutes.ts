import BaseRouter from "./BaseRoutes";
import { Request, Response } from 'express'

// Controller
import UserController from "../controllers/UserController";

class UserRoutes extends BaseRouter {

    public routes(): void {
        this.router.get("/", UserController.index)
        this.router.post("/", UserController.create)
        this.router.get("/:id", UserController.detail)
        this.router.put("/:id", UserController.update)
        this.router.delete("/:id", UserController.delete)
        this.router.get("/role/:role", UserController.getRole)
    }
    
}

export default new UserRoutes().router;