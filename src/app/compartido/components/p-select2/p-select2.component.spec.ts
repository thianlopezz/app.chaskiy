import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSelect2Component } from './p-select2.component';

describe('PSelect2Component', () => {
  let component: PSelect2Component;
  let fixture: ComponentFixture<PSelect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PSelect2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
