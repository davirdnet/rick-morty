import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MortyCardService } from './morty-card.service';

describe('MortyCardService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [MortyCardService]
  }));

  it('should be created', () => {
    const service: MortyCardService = TestBed.get(MortyCardService);
    expect(service).toBeTruthy();
  });

  it('should have getMorty function', () => {
    const service: MortyCardService = TestBed.get(MortyCardService);
    expect(service.getMorty).toBeTruthy();
  });

});
