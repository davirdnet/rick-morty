import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickCardDetailComponent } from './rick-card-detail.component';

describe('RickCardDetailComponent', () => {
  let component: RickCardDetailComponent;
  let fixture: ComponentFixture<RickCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
