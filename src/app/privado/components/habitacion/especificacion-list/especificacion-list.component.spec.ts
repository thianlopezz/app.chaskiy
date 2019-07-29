import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificacionListComponent } from './especificacion-list.component';

describe('EspecificacionListComponent', () => {
  let component: EspecificacionListComponent;
  let fixture: ComponentFixture<EspecificacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EspecificacionListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecificacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
