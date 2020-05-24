import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripHistoricComponent } from './trip-historic.component';

describe('TripHistoricComponent', () => {
  let component: TripHistoricComponent;
  let fixture: ComponentFixture<TripHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripHistoricComponent ],
      imports: [ ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
