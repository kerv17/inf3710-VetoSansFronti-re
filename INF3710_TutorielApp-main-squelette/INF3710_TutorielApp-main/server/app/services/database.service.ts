import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";
import { Room } from "../../../common/tables/Room";
import { Hotel } from "../../../common/tables/Hotel";
import { Animal } from "../../../common/tables/Animal";
import{TraitementEffectue} from "../../../common/tables/TraitementEffectue"
import{Proprietaire} from "../../../common/tables/proprietaire"
import {Clinique} from "../../..//common/tables/Clinique"



@injectable()
export class DatabaseService {
  //Entrer vos informations
  connectionConfig:pg.ConnectionConfig= {
    user:'postgres',
    host: 'localhost',
    database: 'Veto',
    password: 'Willywhale1',
    port: 5432,
    keepAlive:true,
    
    
  };
  client = new pg.Client({
    user:'postgres',
    host: 'localhost',
    database: 'name',
    password: 'password',
    port: 5432,
  })


 private pool: pg.Pool = new pg.Pool(this.connectionConfig);

 
  // ======= DEBUG =======
  public async getAllFromTable(tableName: string): Promise<pg.QueryResult> {
    
    const client = await this.pool.connect();
    const res = await client.query(`SELECT * FROM HOTELDB.${tableName};`);
    client.release();
    return res;
  }

  //Get ALL animals
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
  const client = await this.pool.connect(); 
  console.log(info);
  const information = info.split(',');
    console.log(information[0])
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

//Add an animal
async addAnimal(animal:Animal):Promise<String>{
  const client = await this.pool.connect();
  const query=`Insert Into VetoDb.animal VALUES (`+'`'+animal.noanimal+'`'+','+'`'+animal.noclinique+'`'+','+'`'+animal.noproprietaire
  +','+animal.nom+','+animal.type+','+animal.espece+','+animal.taille
  +'`'+','+'`'+animal.poids+'`'+','+'`'+animal.description+'`'+','+'`'+animal.datenaissance+'`'+','+'`'+animal.dateinscription+'`'+','+'`'+animal.etatactuel+'`'+')';
  
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
    const query=`DELETE from VetoDb.Animal WHERE noanimal='`+information[0].toString()+`' and noclinique='`+information[1]+`';`;
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
  const query=`UPDATE VetoDb.Animal SET noProprietaire= ` +'`'+animal.noproprietaire+'`'
  +',nom='+'`'+animal.nom+'`'+',taille'+'`'+animal.taille
  +'`'+',poids='+'`'+animal.poids+'`'+',description='+'`'+animal.description+'`'+',etatActuel'
  +'`'+animal.etatactuel+'`'+'Where noAnimal='
  +'`'+animal.noanimal+'`'+'and noClinique='+'`'+animal.noclinique+'`;'; 
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


///========Examen========== 
   public async getAllTraitements(info:string):Promise<TraitementEffectue[]>{
    const client = await this.pool.connect();
    const traitements:TraitementEffectue[]=new Array();
    const information = info.split(',');

    const query=`Select * from
                  VetoDb.traitementeffectue
                  WHERE noExamen='${information[0]}'
                  and noClinique ='${information[1]}';`;
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

  // ======= HOTEL =======
  public async createHotel(hotel: Hotel): Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    if (!hotel.hotelnb || !hotel.name || !hotel.city)
      throw new Error("Invalid create hotel values");

    const values: string[] = [hotel.hotelnb, hotel.name, hotel.city];
    const queryText: string = `INSERT INTO HOTELDB.Hotel VALUES($1, $2, $3);`;

    const res = await client.query(queryText, values);
    client.release()
    return res;
  }


  // get hotels that correspond to certain caracteristics
  public async filterHotels(hotelNb: string, hotelName: string, city: string): Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    const searchTerms: string[] = [];
    if (hotelNb.length > 0) searchTerms.push(`hotelNb = '${hotelNb}'`);
    if (hotelName.length > 0) searchTerms.push(`name = '${hotelName}'`);
    if (city.length > 0) searchTerms.push(`city = '${city}'`);

    let queryText = "SELECT * FROM HOTELDB.Hotel";
    if (searchTerms.length > 0) queryText += " WHERE " + searchTerms.join(" AND ");
    queryText += ";";

    const res = await client.query(queryText);
    client.release()
    return res;
  }


  // get the hotel names and numbers so so that the user can only select an existing hotel
  public async getHotelNamesByNos(): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const res = await client.query("SELECT hotelNb, name FROM HOTELDB.Hotel;");
    client.release()
    return res;
  }


  // modify name or city of a hotel
  public async updateHotel(hotel: Hotel): Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    let toUpdateValues = [];
  
    if (hotel.name.length > 0) toUpdateValues.push(`name = '${hotel.name}'`);
    if (hotel.city.length > 0) toUpdateValues.push(`city = '${hotel.city}'`);

    if (!hotel.hotelnb || hotel.hotelnb.length === 0 || toUpdateValues.length === 0)
      throw new Error("Invalid hotel update query");

    const query = `UPDATE HOTELDB.Hotel SET ${toUpdateValues.join(", ")} WHERE hotelNb = '${hotel.hotelnb}';`;
    const res = await client.query(query);
    client.release()
    return res;
  }





  // ======= ROOMS =======
  public async createRoom(room: Room): Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    if (!room.roomnb || !room.hotelnb || !room.type || !room.price)
      throw new Error("Invalid create room values");

    const values: string[] = [
      room.roomnb,
      room.hotelnb,
      room.type,
      room.price.toString(),
    ];
    const queryText: string = `INSERT INTO HOTELDB.ROOM VALUES($1, $2, $3, $4);`;

    const res = await client.query(queryText, values);
    client.release()
    return res;
  }


  public async filterRooms(
    hotelNb: string,
    roomNb: string = "",
    roomType: string = "",
    price: number = -1
    ): Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    if (!hotelNb || hotelNb.length === 0) throw new Error("Invalid filterRooms request");
    
    let searchTerms = [];
    searchTerms.push(`hotelNb = '${hotelNb}'`);

    if (roomNb.length > 0) searchTerms.push(`hotelNb = '${hotelNb}'`);
    if (roomType.length > 0) searchTerms.push(`type = '${roomType}'`);
    if (price >= 0) searchTerms.push(`price = ${price}`);

    let queryText = `SELECT * FROM HOTELDB.Room WHERE ${searchTerms.join(" AND ")};`;
    const res = await client.query(queryText);
    client.release()
    return res;
  }


  public async updateRoom(room: Room): Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    let toUpdateValues = [];
    if (room.price >= 0) toUpdateValues.push(`price = ${room.price}`);
    if (room.type.length > 0)
      toUpdateValues.push(`type = '${room.type}'`);

    if (!room.hotelnb ||
      room.hotelnb.length === 0 ||
      !room.roomnb ||
      room.roomnb.length === 0 ||
      toUpdateValues.length === 0
    ) throw new Error("Invalid room update query");

    const query = `UPDATE HOTELDB.Room SET ${toUpdateValues.join(
    ", "
    )} WHERE hotelNb = '${room.hotelnb}' AND roomNb = '${room.roomnb}';`;
    const res = await client.query(query);
    client.release()
    return res;
  }


  public async deleteRoom(hotelNb: string, roomNb: string): Promise<pg.QueryResult> {
    if (hotelNb.length === 0) throw new Error("Invalid room delete query");
    const client = await this.pool.connect();

    const query = `DELETE FROM HOTELDB.Room WHERE hotelNb = '${hotelNb}' AND roomNb = '${roomNb}';`;
    const res = await client.query(query);
    client.release()
    return res;
  }

  /*
  // ======= GUEST =======
  public async createGuest(guest: Guest): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    if (
      !guest.guestnb ||
      !guest.nas ||
      !guest.name ||
      !guest.gender ||
      !guest.city
    ) throw new Error("Invalid create room values");

    if (!(guest.gender in Gender)) throw new Error("Unknown guest gender passed");

    const values: string[] = [
      guest.guestnb,
      guest.nas,
      guest.name,
      guest.gender,
      guest.city,
    ];
    const queryText: string = `INSERT INTO HOTELDB.Guest VALUES($1, $2, $3, $4, $5);`;
    const res = await client.query(queryText, values);
    client.release()
    return res;
  }


  public async getGuests(hotelNb: string, roomNb: string): Promise<pg.QueryResult> {
    if (!hotelNb || hotelNb.length === 0) throw new Error("Invalid guest hotel no");
    
    const client = await this.pool.connect();
    const queryExtension = roomNb ? ` AND b.roomNb = '${roomNb}'` : "";
    const query: string = `SELECT * FROM HOTELDB.Guest g JOIN HOTELDB.Booking b ON b.guestNb = g.guestNb WHERE b.hotelNb = '${hotelNb}'${queryExtension};`;

    const res = await client.query(query);
    client.release()
    return res;
  }

  // ======= BOOKING =======
  public async createBooking(
    hotelNb: string,
    guestNo: string,
    dateFrom: Date,
    dateTo: Date,
    roomNb: string
  ): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const values: string[] = [
      hotelNb,
      guestNo,
      dateFrom.toString(),
      dateTo.toString(),
      roomNb,
    ];
    const queryText: string = `INSERT INTO HOTELDB.ROOM VALUES($1,$2,$3,$4,$5);`;

    const res = await client.query(queryText, values);
    client.release()
    return res;
  }
  */
}
