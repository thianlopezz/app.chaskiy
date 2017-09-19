import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReservasComponent } from './card-reservas.component';

describe('CardReservasComponent', () => {
  let component: CardReservasComponent;
  let fixture: ComponentFixture<CardReservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardReservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
