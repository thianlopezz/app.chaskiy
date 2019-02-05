import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PInputComponent } from './p-input.component';

describe('PInputComponent', () => {
  let component: PInputComponent;
  let fixture: ComponentFixture<PInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
