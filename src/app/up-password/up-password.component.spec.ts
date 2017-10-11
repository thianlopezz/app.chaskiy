import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpPasswordComponent } from './up-password.component';

describe('UpPasswordComponent', () => {
  let component: UpPasswordComponent;
  let fixture: ComponentFixture<UpPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
