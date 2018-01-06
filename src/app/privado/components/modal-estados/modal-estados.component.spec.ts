import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEstadosComponent } from './modal-estados.component';

describe('ModalEstadosComponent', () => {
  let component: ModalEstadosComponent;
  let fixture: ComponentFixture<ModalEstadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEstadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
