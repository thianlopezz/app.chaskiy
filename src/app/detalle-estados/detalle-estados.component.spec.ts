import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEstadosComponent } from './detalle-estados.component';

describe('DetalleEstadosComponent', () => {
  let component: DetalleEstadosComponent;
  let fixture: ComponentFixture<DetalleEstadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEstadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
