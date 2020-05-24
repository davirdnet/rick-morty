import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickCardComponent } from './rick-card.component';

describe('RickCardComponent', () => {
  let component: RickCardComponent;
  let fixture: ComponentFixture<RickCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
