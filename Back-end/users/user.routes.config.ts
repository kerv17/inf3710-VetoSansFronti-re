import {CommonRoutesConfig} from '../common/common.routes.config';
import {SqlConnect} from "./services/SqlConnect.service"
import express from 'express';

export class UsersRoutes /*extends CommonRoutesConfig*/ {
    private sqlConnect:SqlConnect;
    app: express.Application;
   
    constructor(app: express.Application,) {
     
       
       this.sqlConnect= new SqlConnect();
       this.app=app;
       this.configureRoutes();

       
    }

    configureRoutes() {

        this.app.route('/veto/:info')
        .get((req: express.Request,res:express.Response)=>{
              
          
            this.sqlConnect.getOneAnimal(req.params.info).then( 
             animals=>{
                 res.status(200).json(animals);
             
             }
            
         ).catch(
             err=>{
             res.status(404).send('Error');
         }); 
 
             
 
         })
        
        .delete((req: express.Request,res:express.Response)=>{
              
          
            this.sqlConnect.deleteAnimal(req.params.info).then( 
             message=>{
                 res.status(200).send(message)  ;
             
             }
            
         ).catch(
             err=>{
             res.status(404).send('Error');
         });

     
        })
         .patch((req: express.Request,res:express.Response)=>{
              
          
            this.sqlConnect.modifyAnimalInfo(req.body).then( 
             message=>{
                 res.status(200).send(message)  ;
             
             }
            
         ).catch(
             err=>{
             res.status(404).send('Error');
         }); 

         
        })
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
                res.status(404).send('Error');  
              });
               
            });

            

      
            
    
        return this.app;
    }

}