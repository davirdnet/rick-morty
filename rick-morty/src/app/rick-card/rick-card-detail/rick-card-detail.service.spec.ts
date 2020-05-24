import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RickCardDetailService } from './rick-card-detail.service';


describe('RickCardDetailService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [RickCardDetailService]
  }));

  it('should be created', () => {
    const service: RickCardDetailService = TestBed.get(RickCardDetailService);
    expect(service).toBeTruthy();
  });

  it('should have getRicky function', () => {
    const service: RickCardDetailService = TestBed.get(RickCardDetailService);
    expect(service.getRicky).toBeTruthy();
  });

});
