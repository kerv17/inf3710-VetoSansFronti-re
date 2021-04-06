import * as pg from "pg";
import * as readline from 'readline';
import {Animal} from '../Interfaces/animalInterface';


const { Client } =pg;

let client :pg.Client;

const getQuery = `
SELECT * FROM VetoDB.Animal `;


export class SqlConnect{

constructor(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question("What is the name of your database ? ", function(name) {
            
          
            rl.question("What is the password for the database ? ", function(password) {
                 client = new Client({
                    user: 'postgres',
                    host: 'localhost',
                    database: name,
                    password: password,
                    port: 5432,
                });
           
                client.connect().then(r =>{console.log('sucess')});
               rl.close()
            });

           
       
    });
    
 
   
    
}




  async getAllanimals():Promise<Animal[]>{
    let animals:Animal[]=new Array(); 
   console.log('here');
    return client.query(getQuery).then(res  => {
      
        for (let row of res.rows) {
           
            animals.push(row);
            
        }
        console.log(animals); 
        return animals;
       
    }).catch(err=>{
        
            console.error(err);
            
            throw new Error();
     
        
    });
  
}


async addAnimal(animal:Animal):Promise<String>{

const query=`Insert Into VetoDb.animal VALUES (`+animal.nom+','+animal.noClinique+','+animal.noProprietaire
+','+animal.type+','+animal.espece+','+animal.description
+','+animal.poids+','+animal.taille+','+animal.dateNaissance+','+animal.dateNaissance+','+animal.etatActuel+')';

return client.query(query).then(res  => {

    return 'success';
   
}).catch(err=>{
    
        console.error(err);
        
        throw new Error();
 
    
});

}



}