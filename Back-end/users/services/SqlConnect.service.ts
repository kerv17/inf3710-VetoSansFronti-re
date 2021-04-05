import * as pg from "pg";
import * as readline from 'readline';
import {Animal} from '../Interfaces/animalInterface';


const { Client } =pg;

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: '',
    password: '',
    port: 5432,
});

const query = `
SELECT *
FROM VetoDb.Animal
`;


export class SqlConnect{

constructor(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question("What is the name of your database ? ", function(name) {
            client.database=name;
            console.log(client.database);
          
            rl.question("What is the password for the dabase ? ", function(password) {
                client.password=password;
                console.log(client.password);
                client.connect().then(r =>{console.log('sucess')});
               rl.close()
            });
       
    });
    
   
   
    
}




  async getAllanimals():Promise<Animal[]>{
    let animals:Animal[]=new Array(); 
   return client.query(query).then(res  => {
      
      
        
        for (let row of res.rows) {
            
            animals.push(row)
            
        }
        console.log(animals)
        
        client.end();
        return animals;
       
    }).catch(err=>{
        
            console.error(err);
            
            throw new Error();
     
        
    });
  
}

}