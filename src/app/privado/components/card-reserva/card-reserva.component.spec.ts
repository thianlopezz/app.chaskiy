import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReservaComponent } from './card-reserva.component';

describe('CardReservaComponent', () => {
  let component: CardReservaComponent;
  let fixture: ComponentFixture<CardReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
