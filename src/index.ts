import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser';

class App {
    public app:Application;

    constructor(){
        this.app = express()
        this.routes()
    }

    protected routes():void{
        this.app.route("/").get((req:Request, res:Response) => {
            res.send("Welcome to RestAPI Pattern Architect")
        })
    }
}

const app = new App().app
const port:number = 8000

app.listen(port, () => {
    console.info(`Server running at http://localhost:${port}`)
})