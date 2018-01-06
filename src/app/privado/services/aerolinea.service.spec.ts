import { TestBed, inject } from '@angular/core/testing';

import { AerolineaService } from './aerolinea.service';

describe('AerolineaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AerolineaService]
    });
  });

  it('should be created', inject([AerolineaService], (service: AerolineaService) => {
    expect(service).toBeTruthy();
  }));
});
