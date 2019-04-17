import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { House } from './house';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class HouseService {
  private housesUrl = 'api/houses';

  constructor(private http: HttpClient) { }

  getHouses(): Observable<House[]> { //returns list of houses
    return this.http.get<House[]>(this.housesUrl);
  }
}
