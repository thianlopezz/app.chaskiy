import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosuccessComponent } from './registrosuccess.component';

describe('RegistrosuccessComponent', () => {
  let component: RegistrosuccessComponent;
  let fixture: ComponentFixture<RegistrosuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrosuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
