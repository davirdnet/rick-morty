import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Morty } from './morty';

@Injectable({
  providedIn: 'root'
})
export class MortyCardService {

  result;

  private url = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  getMorty(rick): Observable<Morty[]> {
    return this.http.get<Morty[]>(this.url + '/mortys' + '?rick_property=' + rick);
  }
}
