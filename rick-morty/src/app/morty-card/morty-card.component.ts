import { Component, OnInit, Input } from '@angular/core';
import { MortyCardService } from './morty-card.service';
import { Morty } from './morty';

@Component({
  selector: 'app-morty-card',
  templateUrl: './morty-card.component.html',
  styleUrls: ['./morty-card.component.scss']
})


export class MortyCardComponent implements OnInit {

  morty;
  @Input() rickName: string;

  constructor(private mortyCardService: MortyCardService) { }

  ngOnInit(): void {
    this.getOneMorty();
  }


  getOneMorty() {
    this.morty = this.mortyCardService.getMorty(this.rickName).subscribe(
      cards => cards.map(card => {
        this.morty = card;
      })
    );
    console.log('morty name ', this.morty.name);
  }
}
