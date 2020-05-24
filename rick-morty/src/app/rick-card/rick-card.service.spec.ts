import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RickCardService } from './rick-card.service';


describe('RickCardService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [RickCardService]
  }));

  it('should be created', () => {
    const service: RickCardService = TestBed.get(RickCardService);
    expect(service).toBeTruthy();
  });

  it('should have getAllRicks function', () => {
    const service: RickCardService = TestBed.get(RickCardService);
    expect(service.getAllRicks).toBeTruthy();
  });

});
