import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificacionCardComponent } from './especificacion-card.component';

describe('EspecificacionCardComponent', () => {
  let component: EspecificacionCardComponent;
  let fixture: ComponentFixture<EspecificacionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EspecificacionCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecificacionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
