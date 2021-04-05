import {CommonRoutesConfig} from '../common/common.routes.config';
import {SqlConnect} from "./services/SqlConnect.service"
import express from 'express';

export class UsersRoutes /*extends CommonRoutesConfig*/ {
    private sqlConnect:SqlConnect;
    app: express.Application;
   
    constructor(app: express.Application,) {
       // super(app, 'UsersRoutes');
       
       this.sqlConnect= new SqlConnect();
       this.app=app;
       this.configureRoutes();

       
    }

    configureRoutes() {

        this.app.route(`/veto`)
            .get((req: express.Request, res: express.Response) => {
            console.log('test');
                this.sqlConnect.getAllanimals().then(
                animals=>{
                    //res.status(200).json(animals);
                    res.status(200).send(`Post to users`);
                }
               
            ).catch(
                err=>{
                res.status(404).send('Testing');
            });
               
                
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(`Post to users`);
            });
    
        this.app.route(`/users`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of users`);
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(`Post to users`);
            });
    
        this.app.route(`/users/:userId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
              console.log('test');
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