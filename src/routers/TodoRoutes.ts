import BaseRouter from "./BaseRoutes";

// Controller
import TodoController from "../controllers/TodoController";

class TodoRoutes extends BaseRouter{
    routes(): void {
        this.router.get("/", TodoController.index)
        this.router.post("/", TodoController.create)
        this.router.get("/:id", TodoController.detail)
        this.router.put("/:id", TodoController.update)
        this.router.delete("/:id", TodoController.delete)
    }
}

export default new TodoRoutes().router;