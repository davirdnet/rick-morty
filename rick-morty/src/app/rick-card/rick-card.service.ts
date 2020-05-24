import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickCardService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllRicks() {
    return this.http.get(this.url + '/ricks');
  }

  postTrip(id, trip) {
    return this.http.patch(this.url + '/ricks/' + id, trip);
  }
}
