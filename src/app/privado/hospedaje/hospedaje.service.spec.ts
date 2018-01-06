import { TestBed, inject } from '@angular/core/testing';

import { HospedajeService } from './hospedaje.service';

describe('HospedajeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HospedajeService]
    });
  });

  it('should be created', inject([HospedajeService], (service: HospedajeService) => {
    expect(service).toBeTruthy();
  }));
});
