import { TestBed, inject } from '@angular/core/testing';

import { AgenciaService } from './agencia.service';

describe('AgenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgenciaService]
    });
  });

  it('should be created', inject([AgenciaService], (service: AgenciaService) => {
    expect(service).toBeTruthy();
  }));
});
