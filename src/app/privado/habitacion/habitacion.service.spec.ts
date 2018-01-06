import { TestBed, inject } from '@angular/core/testing';

import { HabitacionService } from './habitacion.service';

describe('HabitacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HabitacionService]
    });
  });

  it('should be created', inject([HabitacionService], (service: HabitacionService) => {
    expect(service).toBeTruthy();
  }));
});
