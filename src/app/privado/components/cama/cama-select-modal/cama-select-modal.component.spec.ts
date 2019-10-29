import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaSelectModalComponent } from './cama-select-modal.component';

describe('CamaSelectModalComponent', () => {
  let component: CamaSelectModalComponent;
  let fixture: ComponentFixture<CamaSelectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CamaSelectModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
