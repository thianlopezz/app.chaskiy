import { TestBed, inject } from '@angular/core/testing';

import { PasajeroService } from './pasajero.service';

describe('PasajeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasajeroService]
    });
  });

  it('should be created', inject([PasajeroService], (service: PasajeroService) => {
    expect(service).toBeTruthy();
  }));
});
