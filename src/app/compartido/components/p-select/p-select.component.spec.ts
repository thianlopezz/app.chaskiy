import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSelectComponent } from './p-select.component';

describe('PSelectComponent', () => {
  let component: PSelectComponent;
  let fixture: ComponentFixture<PSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
