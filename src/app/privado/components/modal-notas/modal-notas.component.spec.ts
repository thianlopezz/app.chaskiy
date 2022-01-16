import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotasComponent } from './modal-notas.component';

describe('ModalNotasComponent', () => {
  let component: ModalNotasComponent;
  let fixture: ComponentFixture<ModalNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNotasComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
