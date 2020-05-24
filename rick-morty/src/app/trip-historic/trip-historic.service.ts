import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripHistoricService {

  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getHistoric(name) {
    return this.http.get(this.url + '/historic?rick_name=' + name);
  }
}
