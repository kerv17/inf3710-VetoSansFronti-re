import {CommonRoutesConfig} from '../common/common.routes.config';
import {SqlConnect} from "./services/SqlConnect.service"
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application,private sqlConnect:SqlConnect) {
        super(app, 'VetRoutes');
    }

    configureRoutes() {

        this.app.route(`/Veto`)
            .get((req: express.Request, res: express.Response) => {
            this.sqlConnect.getAllanimals().then(
                animals=>{
                    res.status(200).json(animals);
                }
               
            ).catch(
                err=>{
                res.sendStatus(404);
            });
               
                
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(`Post to users`);
            });
    
        this.app.route(`/users/:userId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                // this middleware function runs before any request to /users/:userId
                // but it doesn't accomplish anything just yet---
                // it simply passes control to the next applicable function below using next()
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.userId}`);
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT requested for id ${req.params.userId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH requested for id ${req.params.userId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETE requested for id ${req.params.userId}`);
            });
            
    
        return this.app;
    }

}