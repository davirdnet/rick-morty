import { TestBed } from '@angular/core/testing';

import { RickCardService } from './rick-card.service';

describe('RickCardService', () => {
  let service: RickCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
