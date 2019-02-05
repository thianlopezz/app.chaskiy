import { TestBed, inject } from '@angular/core/testing';

import { MarcacionService } from './marcacion.service';

describe('MarcacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarcacionService]
    });
  });

  it('should be created', inject([MarcacionService], (service: MarcacionService) => {
    expect(service).toBeTruthy();
  }));
});
