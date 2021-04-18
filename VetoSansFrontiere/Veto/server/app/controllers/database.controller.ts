import { NextFunction, Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import * as pg from "pg";





import { DatabaseService } from "../services/database.service";
import Types from "../types";

@injectable()
export class DatabaseController {
  public constructor(
    @inject(Types.DatabaseService) private databaseService: DatabaseService
  ) {}

  public get router(): Router {
    const router: Router = Router();


    router.get("/animals/:info", (req: Request, res: Response, _: NextFunction) => {
  
      this.databaseService
        .getAllanimals(req.params.info).then(animals =>{

          res.json(animals);})
        .catch((e: Error) => {
          console.error(e);
          res.sendStatus(404);
        });
    });

    router.get("/animals", (req: Request, res: Response, _: NextFunction) => {
  
      this.databaseService
        .getAllanimaux().then(animals =>{

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
      "/animal/name/:info",
      (req: Request, res: Response, _: NextFunction) => {
        this.databaseService
          .getAnimalsFromName(req.params.info)
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
      "/animal/traitement/:info",
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
      "/animal/examen/:info",
      (req: Request, res: Response, _: NextFunction) => {
        this.databaseService
          .getAllExamens(req.params.info)
          .then((examens) => {
          
            res.json(examens);
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
      console.log(animal);
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
      "/animals/delete/:info",
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
  //=====Facture====== routes

  router.get(
    "/facture/:info/:paiement",
    (req: Request, res: Response, _: NextFunction) => {
      this.databaseService
        .creerFacture(req.params.info,req.params.paiement)
        .then((facture) => {
        
          res.send(facture);
        })

        .catch((e: Error) => {
          console.error(e);
          res.sendStatus(404);
        });
    }
  );

  //===Proprietaire Routes
  router.get("/proprietaires/:info", (req: Request, res: Response, _: NextFunction) => {
  
    this.databaseService
      .getAllProprietaires(req.params.info).then(proprietaires =>{

        res.json(proprietaires);})
      .catch((e: Error) => {
        console.error(e);
        res.sendStatus(404);
      });
  });
    // =======Clinique Routes =====
    router.get("/cliniques", (req: Request, res: Response, _: NextFunction) => {
  
      this.databaseService
        .getAllCliniques().then(cliniques =>{
  
          res.json(cliniques);})
        .catch((e: Error) => {
          console.error(e);
          res.sendStatus(404);
        });
    });


 


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
