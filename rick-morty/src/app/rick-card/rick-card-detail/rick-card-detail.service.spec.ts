import { TestBed } from '@angular/core/testing';

import { RickCardDetailService } from './rick-card-detail.service';

describe('RickCardDetailService', () => {
  let service: RickCardDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickCardDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
