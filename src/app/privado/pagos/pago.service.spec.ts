import { TestBed, inject } from '@angular/core/testing';

import { PagoService } from './pago.service';

describe('PagoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagoService]
    });
  });

  it('should be created', inject([PagoService], (service: PagoService) => {
    expect(service).toBeTruthy();
  }));
});
