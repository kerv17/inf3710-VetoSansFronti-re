import { NextFunction, Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import * as pg from "pg";


import { Room } from "../../../common/tables/Room";


import { DatabaseService } from "../services/database.service";
import Types from "../types";

@injectable()
export class DatabaseController {
  public constructor(
    @inject(Types.DatabaseService) private databaseService: DatabaseService
  ) {}

  public get router(): Router {
    const router: Router = Router();

    // ======= HOTEL ROUTES =======
    //http://localhost:3000/database/animals
    // ex http://localhost:3000/database/hotel?hotelNb=3&name=LeGrandHotel&city=laval
    router.get("/animals/:info", (req: Request, res: Response, _: NextFunction) => {
  
      this.databaseService
        .getAllanimals(req.params.info).then(animals =>{

          res.json(animals);})
        .catch((e: Error) => {
          console.error(e);
          res.sendStatus(404);
        });
    });


    router.get(
      "/animal/:info",
      (req: Request, res: Response, _: NextFunction) => {
        this.databaseService
          .getOneAnimal(req.params.info)
          .then((animal) => {
          
            res.json(animal);
          })

          .catch((e: Error) => {
            console.error(e);
            res.sendStatus(404);
          });
      }
    );

    router.get(
      "/animal/examen/:info",
      (req: Request, res: Response, _: NextFunction) => {
        this.databaseService
          .getAllTraitements(req.params.info)
          .then((traitements) => {
          
            res.json(traitements);
          })

          .catch((e: Error) => {
            console.error(e);
            res.sendStatus(404);
          });
      }
    );

    router.get(
      "/traitements/:info",
      (req: Request, res: Response, _: NextFunction) => {
        this.databaseService
          .getOneAnimal(req.params.info)
          .then((animal) => {
          
            res.json(animal);
          })

          .catch((e: Error) => {
            console.error(e);
            res.sendStatus(404);
          });
      }
    );

    router.post(
      "/animals/insert",
      (req: Request, res: Response, _: NextFunction) => {
       const animal=req.body;

        this.databaseService
          .addAnimal(animal)
          .then(message => {
            res.json(message);
          })
          .catch((e: Error) => {
            console.error(e.stack);
            res.sendStatus(404);
          });
      }
    );


    router.delete(
      "/animals/:info",
      (req: Request, res: Response, _: NextFunction) => {
        
        this.databaseService
          .deleteAnimal(req.params.info)
          .then((result) => {
            res.json(result);
          })
          .catch((e: Error) => {
            console.error(e.stack);
            res.sendStatus(404);
          });
      }
    );


    router.put(
      "/animals/update",
      (req: Request, res: Response, _: NextFunction) => {
        const animal = req.body;

        this.databaseService
          .modifyAnimalInfo(animal)
          .then((result) => {
            res.json(result);
          })
          .catch((e: Error) => {
            console.error(e.stack);
            res.sendStatus(404);
          });
      }
    );

  

    // ======= ROOMS ROUTES =======
    router.get("/rooms", (req: Request, res: Response, _: NextFunction) => {
      const hotelNb = req.query.hotelNb ? req.query.hotelNb : "";
      const roomNb = req.query.roomNb ? req.query.roomNb : "";
      const roomType = req.query.type ? req.query.type : "";
      const roomPrice = req.query.price ? parseFloat(req.query.price) : -1;

      this.databaseService
        .filterRooms(hotelNb, roomNb, roomType, roomPrice)
        .then((result: pg.QueryResult) => {
          const rooms: Room[] = result.rows.map((room: Room) => ({
            hotelnb: room.hotelnb,
            roomnb: room.roomnb,
            type: room.type,
            price: parseFloat(room.price.toString()),
          }));

          res.json(rooms);
        })
        .catch((e: Error) => {
          console.error(e.stack);
        });
    });


    router.post(
      "/rooms/insert",
      (req: Request, res: Response, _: NextFunction) => {
        const room: Room = {
          hotelnb: req.body.hotelnb,
          roomnb: req.body.roomnb,
          type: req.body.type,
          price: parseFloat(req.body.price),
        };

        this.databaseService
          .createRoom(room)
          .then((result: pg.QueryResult) => {
            res.json(result.rowCount);
          })
          .catch((e: Error) => {
            console.error(e.stack);
            res.json(-1);
          });
      }
    );


    router.put(
      "/rooms/update",
      (req: Request, res: Response, _: NextFunction) => {
        const room: Room = {
          hotelnb: req.body.hotelnb,
          roomnb: req.body.roomnb,
          type: req.body.type,
          price: parseFloat(req.body.price),
        };

        this.databaseService
          .updateRoom(room)
          .then((result: pg.QueryResult) => {
            res.json(result.rowCount);
          })
          .catch((e: Error) => {
            console.error(e.stack);
            res.json(-1);
          });
      }
    );


    router.post(
      "/rooms/delete/:hotelNb/:roomNb",
      (req: Request, res: Response, _: NextFunction) => {
        const hotelNb: string = req.params.hotelNb;
        const roomNb: string = req.params.roomNb;

        this.databaseService
          .deleteRoom(hotelNb, roomNb)
          .then((result: pg.QueryResult) => {
            res.json(result.rowCount);
          })
          .catch((e: Error) => {
            console.error(e.stack);
            res.json(-1);
          });
      }
    );





 


    // ======= GENERAL ROUTES =======
    router.get(
      "/tables/:tableName",
      (req: Request, res: Response, next: NextFunction) => {
        this.databaseService
          .getAllFromTable(req.params.tableName)
          .then((result: pg.QueryResult) => {
            res.json(result.rows);
          })
          .catch((e: Error) => {
            console.error(e.stack);
          });
      }
    );

    return router;
  }
}
