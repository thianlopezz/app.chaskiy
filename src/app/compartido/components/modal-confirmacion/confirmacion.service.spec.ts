import { TestBed, inject } from '@angular/core/testing';

import { ConfirmacionService } from './confirmacion.service';

describe('ConfirmacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmacionService]
    });
  });

  it('should be created', inject([ConfirmacionService], (service: ConfirmacionService) => {
    expect(service).toBeTruthy();
  }));
});
