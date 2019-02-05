import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTextAreaComponent } from './p-text-area.component';

describe('PTextAreaComponent', () => {
  let component: PTextAreaComponent;
  let fixture: ComponentFixture<PTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
