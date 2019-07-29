import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificacionSelectModalComponent } from './especificacion-select-modal.component';

describe('EspecificacionSelectModalComponent', () => {
  let component: EspecificacionSelectModalComponent;
  let fixture: ComponentFixture<EspecificacionSelectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EspecificacionSelectModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecificacionSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
