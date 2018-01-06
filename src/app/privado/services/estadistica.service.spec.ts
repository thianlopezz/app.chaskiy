import { TestBed, inject } from '@angular/core/testing';

import { EstadisticaService } from './estadistica.service';

describe('EstadisticaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstadisticaService]
    });
  });

  it('should be created', inject([EstadisticaService], (service: EstadisticaService) => {
    expect(service).toBeTruthy();
  }));
});
