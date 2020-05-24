import { TestBed } from '@angular/core/testing';

import { MortyCardService } from './morty-card.service';

describe('MortyCardService', () => {
  let service: MortyCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortyCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
