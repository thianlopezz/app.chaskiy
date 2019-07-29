import { TestBed, inject } from '@angular/core/testing';

import { EspecificacionService } from './especificacion.service';

describe('EspecificacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EspecificacionService]
    });
  });

  it('should be created', inject([EspecificacionService], (service: EspecificacionService) => {
    expect(service).toBeTruthy();
  }));
});
