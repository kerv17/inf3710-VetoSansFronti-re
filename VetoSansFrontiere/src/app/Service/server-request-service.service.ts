import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Animal } from '../class/animal';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {
  private readonly BASE_URL: string = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  basicGet(): Observable<HttpResponse<Animal[]>> {
    return this.http.get<Animal[]>(this.BASE_URL, { observe: 'response' });
  }
}
