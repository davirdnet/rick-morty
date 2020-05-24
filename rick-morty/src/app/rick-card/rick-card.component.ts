import { RickCardService } from './rick-card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rick-card',
  templateUrl: './rick-card.component.html',
  styleUrls: ['./rick-card.component.scss']
})
export class RickCardComponent implements OnInit {

  ricks: any;

  constructor(
      private rickCardService: RickCardService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.getRicks();
    console.log(this.ricks);
  }

  getRicks() {
    this.ricks = [];
    this.rickCardService.getAllRicks().subscribe((cards: {}) => {
      this.ricks = cards;
    });
  }

  goDetail(id) {
    this.router.navigateByUrl('/rick-card-detail/' + id);
  }

}
