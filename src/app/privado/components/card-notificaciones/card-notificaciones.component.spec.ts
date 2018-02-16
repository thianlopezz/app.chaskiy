import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNotificacionesComponent } from './card-notificaciones.component';

describe('CardNotificacionesComponent', () => {
  let component: CardNotificacionesComponent;
  let fixture: ComponentFixture<CardNotificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNotificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
