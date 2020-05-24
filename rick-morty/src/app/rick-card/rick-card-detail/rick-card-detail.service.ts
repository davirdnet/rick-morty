import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickCardDetailService {

  result;

  private url = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  getRicky(rick): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/ricks' + '?id=' + rick);
  }

  postTrip(trip) {
    return this.http.post(this.url + '/historic/', trip);
  }
}
