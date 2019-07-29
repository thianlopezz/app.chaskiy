import { TestBed, inject } from '@angular/core/testing';

import { TipoHabitacionService } from './tipo-habitacion.service';

describe('TipoHabitacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoHabitacionService]
    });
  });

  it('should be created', inject([TipoHabitacionService], (service: TipoHabitacionService) => {
    expect(service).toBeTruthy();
  }));
});
