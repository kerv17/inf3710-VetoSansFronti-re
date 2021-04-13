import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Observable, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { Clinique } from "../../../common/tables/Clinique";
import { Animal } from "../../../common/tables/Animal";
import { Proprietaire } from "../../../common/tables/proprietaire";
import { TraitementEffectue } from "../../../common/tables/TraitementEffectue";
import { Examen } from "../../../common/tables/Examen";

@Injectable()
export class CommunicationService {
  private readonly BASE_URL: string = "http://localhost:3000/database";
  public constructor(private http: HttpClient) {}

  private _listners: any = new Subject<any>();

  public listen(): Observable<any> {
    return this._listners.asObservable();
  }

  public filter(filterBy: string): void {
    this._listners.next(filterBy);
  }



  // CLINIQUES ///////////////////////////////////////////////////////////
  public getCliniques(): Observable<Clinique[]> {
    return this.http
      .get<Clinique[]>(this.BASE_URL + "/cliniques")
      .pipe(catchError(this.handleError<Clinique[]>("getCliniques")));
  }

  public insertClinique(clinique: Clinique): Observable<number> {
    return this.http
      .post<number>(this.BASE_URL + "/cliniques/insert", clinique)
      .pipe(catchError(this.handleError<number>("insertClinique")));
  }

  public deleteClinique(cliniqueNb: string): Observable<number> {
    return this.http
      .post<number>(this.BASE_URL + "/cliniques/delete/" + cliniqueNb, {})
      .pipe(catchError(this.handleError<number>("deleteClinique")));
  }
  // //////////////////////////////////////////////////////////////////////

  // Animaux //////////////////////////////////////////////////////////////
  public getAllAnimaux(): Observable<Animal[]>{
    return this.http
      .get<Animal[]>(this.BASE_URL + "/animals")
      .pipe(catchError(this.handleError<Animal[]>("getAnimaux")));
  }


  public getAnimaux(cliniqueNb:string): Observable<Animal[]> {
    return this.http
      .get<Animal[]>(this.BASE_URL + "/animals/" + cliniqueNb)
      .pipe(catchError(this.handleError<Animal[]>("getAnimaux")));
  }

  public getAnimal(cliniqueNb:string,noAnimal:number): Observable<Animal> {
    return this.http
      .get<Animal>(this.BASE_URL + "/animals/" + noAnimal + "," + cliniqueNb)
      .pipe(catchError(this.handleError<Animal>("getAnimal")));
  }

  public getAnimals(like:string, noClinique:string): Observable<Animal[]> {
    return this.http
      .get<Animal[]>(this.BASE_URL + `/animal/name/${like},${noClinique}` )
      .pipe(catchError(this.handleError<Animal[]>("getAnimals")));
  }

  public updateAnimal(animal: Animal): Observable<number> {
    return this.http
      .put<number>(this.BASE_URL + "/animals/update", animal)
      .pipe(catchError(this.handleError<number>("updateAnimal")));
  }

  public deleteAnimal(noClinique: string, noAnimal: string): Observable<number> {
    return this.http
      .post<number>(this.BASE_URL + `/animals/delete/${noClinique}/${noAnimal}`, {})
      .pipe(catchError(this.handleError<number>("deleteAnimal")));
  }

  public insertAnimal(animal: Animal): Observable<number> {
    window.alert('test');
    return this.http
      .post<number>(this.BASE_URL + "/animals/insert", animal)
      .pipe(catchError(this.handleError<number>("insertAnimal")));
  }
  // ///////////////////////////////////////////////////////////////////////

  // PROPRIETAIRES /////////////////////////////////////////////////////////
  public getProprietaires(noClinique:string): Observable<Proprietaire[]> {
    return this.http
      .get<Proprietaire[]>(this.BASE_URL + "/proprietaires/" + noClinique)
      .pipe(catchError(this.handleError<Proprietaire[]>("getProprietaires")));
  }
  // ///////////////////////////////////////////////////////////////////////

  // TRAITEMENTS ///////////////////////////////////////////////////////////
  public getTraitements(noClinique:string, noAnimal:string):Observable<TraitementEffectue[]>{
    return this.http
      .get<TraitementEffectue[]>(this.BASE_URL + `/animal/traitement/${noAnimal},${noClinique}` )
      .pipe(catchError(this.handleError<TraitementEffectue[]>("getTraitements")));
  }

  public getExamens(noClinique:string, noAnimal:string):Observable<Examen[]>{
    return this.http
      .get<Examen[]>(this.BASE_URL + `/animal/examen/${noAnimal},${noClinique}` )
      .pipe(catchError(this.handleError<Examen[]>("getTraitements")));
  }

  private handleError<T>(
    request: string,
    result?: T
  ): (error: Error) => Observable<T> {
    return (error: Error): Observable<T> => {
      return of(result as T);
    };
  }
}
