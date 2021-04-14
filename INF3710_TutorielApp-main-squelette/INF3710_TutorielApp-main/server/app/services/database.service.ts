import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";

import { Animal } from "../../../common/tables/Animal";
import{TraitementEffectue} from "../../../common/tables/TraitementEffectue"
import{Proprietaire} from "../../../common/tables/proprietaire"
import {Clinique} from "../../../common/tables/Clinique"
import {Facture} from "../../../common/tables/facture"
import {Examen} from "../../../common/tables/Examen"
import * as fs from 'fs';
import { Veterinaire } from "../../../common/tables/Veterinaire";



@injectable()
export class DatabaseService {
  //Entrer vos informations
  connectionConfig:pg.ConnectionConfig;
  private pool: pg.Pool ;
 
  constructor(){
    this.connectionConfig=JSON.parse(fs.readFileSync('../../information.json', 'utf-8')); 
    this.pool= new pg.Pool(this.connectionConfig);
  }



 
  // ======= DEBUG =======
  public async getAllFromTable(tableName: string): Promise<pg.QueryResult> {
    
    const client = await this.pool.connect();
    const res = await client.query(`SELECT * FROM HOTELDB.${tableName};`);
    client.release();
    return res;
  }

  //Get ALL animals
  async getAllanimaux():Promise<Animal[]>{
    console.log('ALL');
    const getQuery = `SELECT * FROM VetoDB.Animal;` ;
    const client = await this.pool.connect();
    console.log('here');

    let animals:Animal[]=new Array(); 
   
    return client.query(getQuery).then(res  => {
      
        for (let row of res.rows) {
           
            animals.push(row);
            
        }
        client.release();
        return animals;
       
    }).catch(err=>{
        
            console.error(err);
            client.release();
            throw new Error();
    });
  
}
  async getAllanimals(noClinique:string):Promise<Animal[]>{
    console.log(noClinique);
    const getQuery = `SELECT * FROM VetoDB.Animal Where noCLinique= '${noClinique}';` ;
    const client = await this.pool.connect();
    console.log('here');

    let animals:Animal[]=new Array(); 
   
    return client.query(getQuery).then(res  => {
      
        for (let row of res.rows) {
           
            animals.push(row);
            
        }
        client.release();
        return animals;
       
    }).catch(err=>{
        
            console.error(err);
            client.release();
            throw new Error();
    });
  
}


//Get one animal

async getOneAnimal(info:string):Promise<Animal>{
  //do a string split to split the values of animal name and number of clinique and owner no hopefully
  //lets say that the order is nom noProprietaire noClinique
  const client = await this.pool.connect();   console.log(info);
  const information = info.split(',');
  
  const query=`Select * from VetoDb.Animal WHERE noanimal='`+information[0].toString()+`' and noclinique='`+information[1]+`';`;
   console.log(query);
    return client.query(query).then((res)  => {
    console.log(res);
    const animal:Animal = res.rows[0] ; 
        client.release();
        return animal;
       
    }).catch(err=>{
        
            console.error(err);
            client.release();
            throw new Error();
     
        
    });

}

//Get animlals from name
async getAnimalsFromName(info:string):Promise<Animal[]>{
  const client = await this.pool.connect(); 
  const information = info.split(',');
  const query=`Select * from VetoDb.animal Where LOWER(nom) LIKE '%${information[0].toLowerCase()}%'
  and noClinique = '${information[1]}';`
  let animals:Animal[]=new Array(); 
  if(information.length!=2){
    client.release();
    return animals;
  }
   
    return client.query(query).then(res  => {
      
        for (let row of res.rows) {
           
            animals.push(row);
            
        }
        client.release();
        return animals;
       
    }).catch(err=>{
        
            console.error(err);
            client.release();
            throw new Error();
    });
}

//Add an animal
async addAnimal(animal:Animal):Promise<String>{
  const client = await this.pool.connect();
  const query=`Insert Into VetoDb.animal VALUES ('${animal.noanimal}','${animal.noclinique}','${animal.noproprietaire}','${animal.nom}','${animal.type}',
  '${animal.espece}',${animal.taille},${animal.poids},'${animal.description}','${animal.datenaissance}','${animal.dateinscription}','${animal.etatactuel}');`
  
  
  return client.query(query).then(res  => {
      client.release();
      return 'success';
     
  }).catch(err=>{
      
          console.error(err);
          client.release();
          throw new Error();
   
      
  });
  
  }

  //delete one Animal

  async deleteAnimal(info:string):Promise<string>{
    const client = await this.pool.connect();
    const information = info.split(',');
    const query=`DELETE from VetoDb.Animal WHERE noanimal='${information[1]}' and noclinique = '${information[0]}';`;
    console.log(query);
    return client.query(query).then((res)  => {
            client.release();
            return 'succes';
           
        }).catch(err=>{
            
                console.error(err);
                client.release();
                throw new Error();
        });
}

//Modify the info of an animal
async modifyAnimalInfo(animal:Animal):Promise<string>{
  
  const client = await this.pool.connect();
  const query=`UPDATE VetoDb.Animal SET nom='${animal.nom}',noProprietaire='${animal.noproprietaire}',type='${animal.type}',espece='${animal.espece}',poids=${animal.poids},
  taille=${animal.taille},description='${animal.description}',etatActuel='${animal.etatactuel}'
  where noAnimal='${animal.noanimal}'
  and noClinique='${animal.noclinique}';`
  return client.query(query).then((res)  => {
    client.release();
      return 'succes';
     
  }).catch(err=>{
          client.release();
          console.error(err);
          throw new Error();
  });

}
///========Cliniques===========



public async getAllCliniques():Promise<Clinique[]>{
 
  const getQuery = `SELECT * FROM VetoDB.Clinique ;` ;
  const client = await this.pool.connect();
  console.log('here');

  let cliniques:Clinique[]=new Array(); 
 
  return client.query(getQuery).then(res  => {
    
      for (let row of res.rows) {
         
          cliniques.push(row);
          
      }
      client.release();
      return cliniques;
     
  }).catch(err=>{
      
          console.error(err);
          client.release();
          throw new Error();
  });
}


///========Proprietaires========

public async getAllProprietaires(noClinique:string):Promise<Proprietaire[]>{
 
    const getQuery = `SELECT * FROM VetoDB.ProprietaireAnimal Where noCLinique= '${noClinique}';` ;
    const client = await this.pool.connect();
    console.log('here');

    let proprietaires:Proprietaire[]=new Array(); 
   
    return client.query(getQuery).then(res  => {
      
        for (let row of res.rows) {
           
            proprietaires.push(row);
            
        }
        client.release();
        return proprietaires;
       
    }).catch(err=>{
        
            console.error(err);
            client.release();
            throw new Error();
    });
}
///========Examen==============
public async getAllExamens(info:string):Promise<Examen[]>{
  const client = await this.pool.connect();
  const examens:Examen[]=new Array();
  const information = info.split(',');

  const query=`Select * 
              From   VetoDb.Examen 
              Where noAnimal ='${information[0]}'
              and noClinique ='${information[1]}'
                `;
return client.query(query).then(async (res)  => {
    client.release();
    
    for (let row of res.rows) {
      const veterinaire = await this.getVeterinaire(row.noclinique,row.noveterinaire);
      let examen:Examen={}as Examen;
      
      if(row.facture != undefined){
        
      examen.facture=await this.getFacture(row.noclinique,row.noexamen); 
      examen.facture=await this.ajouterInformationAFacture(examen.facture,row.noclinique,row.noexamen);}
      examen.Veterinaire = veterinaire;
      examens.push(examen);
      
  }
  
    return examens;
   
}).catch(err=>{
        client.release();
        console.error(err);
        throw new Error();
});

 }

///========TRAITEMENT========== 
   public async getAllTraitements(info:string):Promise<TraitementEffectue[]>{
    const client = await this.pool.connect();
    const traitements:TraitementEffectue[]=new Array();
    const information = info.split(',');

    const query=`Select A.* ,description from
                  VetoDb.traitementeffectue A
                  NATURAL JOIN VetoDB.traitement
                  WHERE noExamen in (Select noExamen 
                    From   VetoDb.Examen 
                    Where noAnimal ='${information[0]}'
                    and noClinique ='${information[1]}' )
                  and noClinique ='${information[1]}'
                  `;
  return client.query(query).then((res)  => {
      client.release();
      for (let row of res.rows) {
           
        traitements.push(row);
        
    }
      return traitements;
     
  }).catch(err=>{
          client.release();
          console.error(err);
          throw new Error();
  });

   }

   
//====Facture=======
//Get Facture
public async getFacture(noClinique:string,noExamen:string):Promise<Facture>{

  const client = await this.pool.connect();
  const query= `Select * from VetoDb.Facture where noCLinique = '${noClinique}' and noExamen='${noExamen}';`;
  return client.query(query).then((facture)=>{
    client.release();
    return facture.rows[0];
  }).catch(err=>{
    client.release();
    console.error(err);
    throw new Error();
});;
}


//Creer facture
public async creerFacture(info:string,paiment:string):Promise<Facture>{
  const information = info.split(',');
  const paiementInfo = paiment.split(',');

const date=new Date();
const sqlDate= `'${date.getFullYear()}-${date.getMonth()}-${date.getDate()}'`;
let facture:Facture={} as Facture;
facture.traitements =new Array();

const traitementQuery=` Select * From Vetodb.traitementeffectue 
Where noExamen='${information[1]}' and noClinique ='${information[0]}'`;

const query=`Insert into VetoDb.facture (noExamen,noCLinique,moyenpaiement,date,couttotal,estpaye) 
Values('${information[1]}','${information[0]}','${paiementInfo[0]}',${sqlDate}, (Select Sum(cout) from Vetodb.traitement
where noTraitement =( Select noTraitement From Vetodb.traitementeffectue 
Where noExamen='${information[1]}' and noClinique ='${information[0]}')),${paiementInfo[1]}) Returning *;`;



const client = await this.pool.connect();
return client.query(traitementQuery).then((traitements)=>{ 
  
  
  for (let row of traitements.rows) {
           
    facture.traitements.push(row);
    
  }

 return client.query(query).then((res)  => {
  client.release();
  
  facture=res.rows[0];
  facture.traitements=traitements.rows[0];
  
  return this.ajouterInformationAFacture(facture,information[0],information[1]);
   
}).catch(err=>{
        client.release();
        console.error(err);
        throw new Error();
});


}).catch(err=>{ 
  client.release();
  console.error(err);
  throw new Error();});

}



private async ajouterInformationAFacture(facture:Facture,noclinique:string,noexamen:string):Promise<Facture>{
const queryanimal=`Select * from VetoDb.animal where noClinique='${noclinique}' and noAnimal=(Select (noAnimal) from VetoDb.examen where noexamen='${noexamen}' and noClinique ='${noclinique}');`;
const client = await this.pool.connect();

return client.query(queryanimal).then(animal=>{
  facture.animal=animal.rows[0];
  const proprietaireQuery=`Select * from VetoDb.proprietaireanimal where noProprietaire = (Select (noProprietaire) from VetoDb.animal Where noAnimal ='${facture.animal.noanimal}');`;
 return client.query(proprietaireQuery).then(proprietaire=>{
    facture.proprietaire=proprietaire.rows[0];
    const vetQuery=`Select * from VetoDb.Employe Where noEmploye = (Select (noEmploye) from VetoDb.Examen where noclinique = '${noclinique}' and noexamen='${noexamen}' ); `;
   return  client.query(vetQuery).then(vet=>{
      
    facture.veterinaire=vet.rows[0];
    return facture;

    }).catch(err=>{ 
      client.release();
      console.error(err);
      throw new Error();});
    
    
   

  }).catch(err=>{ 
    client.release();
    console.error(err);
    throw new Error();});
  
  
  
}).catch(err=>{ 
  client.release();
  console.error(err);
  throw new Error();});

  
}

private async getVeterinaire(noclinique:string, noveterinaire:string): Promise<Veterinaire> {
  const client = await this.pool.connect();
  
  const query=`Select * 
              from VetoDb.Veterinaire A NATURAL JOIN VETODB.Employe
              WHERE A.noemploye='${noveterinaire}' and A.noemploye IN(
                SELECT noEmploye
                FROM VetoDb.employe
                WHERE noclinique = '${noclinique}'
              );`;
   //console.log(query);
    return client.query(query).then((res)  => {
    //console.log(res);
    const animal:Veterinaire = res.rows[0] ; 
        client.release();
        //console.log(animal);
        return animal;
       
    }).catch(err=>{
        
            console.error(err);
            client.release();
            throw new Error();
     
        
    });
}



}



