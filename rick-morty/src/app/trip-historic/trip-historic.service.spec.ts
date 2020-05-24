import { TestBed } from '@angular/core/testing';

import { TripHistoricService } from './trip-historic.service';

describe('TripHistoricService', () => {
  let service: TripHistoricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripHistoricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
