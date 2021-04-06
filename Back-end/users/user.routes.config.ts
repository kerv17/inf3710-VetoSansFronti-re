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
                    res.status(200).json(animals);
                
                }
               
            ).catch(
                err=>{
                res.status(404).send('Error');
            }); 
               
                
            })
            .post((req: express.Request, res: express.Response) => {
                
              this.sqlConnect.addAnimal(req.body).then((message)=>{
                res.status(200).send(message);
              }).catch((err)=>{

              });
               
            });

        this.app.route('/veto/:info')
            .get((req: express.Request,res:express.Response)=>{
                  
                //do a string split to split the values of animal name and number of clinique
                req.params.info;  
                

            });
    

            
    
        return this.app;
    }

}