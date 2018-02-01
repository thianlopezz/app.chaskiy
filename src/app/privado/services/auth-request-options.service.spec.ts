import { TestBed, inject } from '@angular/core/testing';

import { AuthRequestOptionsService } from './auth-request-options.service';

describe('AuthRequestOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRequestOptionsService]
    });
  });

  it('should be created', inject([AuthRequestOptionsService], (service: AuthRequestOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
