import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// tslint:disable-next-line:ordered-imports
import { of, Observable, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { Hotel } from "../../../common/tables/Hotel";
import { Room } from "../../../common/tables/Room";
import { HotelPK } from "../../../common/tables/HotelPK";
import { Clinique } from "../../../common/tables/Clinique";
import { Animal } from "../../../common/tables/Animal";
import { Proprietaire } from "../../../common/tables/proprietaire";

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

  public getHotels(): Observable<Hotel[]> {
    return this.http
      .get<Hotel[]>(this.BASE_URL + "/hotels")
      .pipe(catchError(this.handleError<Hotel[]>("getHotels")));
  }

  public getGuests(i:string, j:string): Observable<Hotel[]>{
    return {} as Observable<Hotel[]>;
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
    return this.http
      .post<number>(this.BASE_URL + "/animals/insert", animal)
      .pipe(catchError(this.handleError<number>("insertAnimal")));
  }
  // ///////////////////////////////////////////////////////////////////////

  // PROPRIETAIRES /////////////////////////////////////////////////////////
  public getProprietaires(): Observable<Proprietaire[]> {
    return this.http
      .get<Proprietaire[]>(this.BASE_URL + "/proprietaires")
      .pipe(catchError(this.handleError<Proprietaire[]>("getProprietaires")));
  }
  // ///////////////////////////////////////////////////////////////////////

  

  private handleError<T>(
    request: string,
    result?: T
  ): (error: Error) => Observable<T> {
    return (error: Error): Observable<T> => {
      return of(result as T);
    };
  }
}
