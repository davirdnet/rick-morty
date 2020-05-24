import { TripHistoricService } from './trip-historic.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { stringify } from 'querystring';

@Component({
  selector: 'app-trip-historic',
  templateUrl: './trip-historic.component.html',
  styleUrls: ['./trip-historic.component.scss']
})
export class TripHistoricComponent implements OnInit {

  rickName: string;
  trips;

  constructor(
    private route: ActivatedRoute,
    private tripHistoricService: TripHistoricService
    ) {
      this.route.params.subscribe(params => this.rickName = params['name']);
    }


    ngOnInit(): void {
      this.getTrips();
      console.log('teste ', this.rickName);
    }

  getTrips() {
    this.tripHistoricService.getHistoric(this.rickName).subscribe(trip => this.trips = trip);
  }


}
