import BaseRouter from "./BaseRoutes";
import { auth } from "../middleware/AuthMiddleware";

// Controller
import UserController from "../controllers/UserController";

class UserRoutes extends BaseRouter {

    public routes(): void {
        this.router.get("/", auth, UserController.index)
        this.router.post("/", auth, UserController.create)
        this.router.get("/:id", auth, UserController.detail)
        this.router.put("/:id", auth, UserController.update)
        this.router.delete("/:id", auth, UserController.delete)
        this.router.get("/role/:role",auth, UserController.getRole)
    }
    
}

export default new UserRoutes().router;