import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TripHistoricService } from './trip-historic.service';

describe('TripHistoricService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TripHistoricService]
  }));

  it('should be created', () => {
    const service: TripHistoricService = TestBed.get(TripHistoricService);
    expect(service).toBeTruthy();
  });

  it('should have getHistoric function', () => {
    const service: TripHistoricService = TestBed.get(TripHistoricService);
    expect(service.getHistoric).toBeTruthy();
  });

});

