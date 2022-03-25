import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser';
import morgan from 'morgan'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'

// Routes
import UserRoutes from './routers/UserRoutes';
import TodoRoutes from './routers/TodoRoutes';

class App {
    public app:Application;

    constructor(){
        this.app = express()
        this.plugin()
        this.routes()
    }

    protected plugin():void{
        this.app.use(bodyParser.json())
        this.app.use(morgan("dev"))
        this.app.use(compression())
        this.app.use(helmet())
        this.app.use(cors())
    }

    protected routes():void{
        this.app.route("/api/v1/").get((req:Request, res:Response) => {
            res.send("Welcome to RestAPI Pattern Architect")
        })

        this.app.use("/api/v1/users", UserRoutes)
        this.app.use("/api/v1/todos", TodoRoutes)
    }
}

const app = new App().app
const port:number = 8000

app.listen(port, () => {
    console.info(`Server running at http://localhost:${port}`)
})