import { TestBed, inject } from '@angular/core/testing';

import { TarifaService } from './tarifa.service';

describe('TarifaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TarifaService]
    });
  });

  it('should be created', inject([TarifaService], (service: TarifaService) => {
    expect(service).toBeTruthy();
  }));
});
