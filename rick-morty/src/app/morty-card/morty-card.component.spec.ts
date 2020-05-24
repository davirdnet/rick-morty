import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortyCardComponent } from './morty-card.component';

describe('MortyCardComponent', () => {
  let component: MortyCardComponent;
  let fixture: ComponentFixture<MortyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
