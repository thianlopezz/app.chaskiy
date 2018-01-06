import { TestBed, inject } from '@angular/core/testing';

import { ConfirmacionEventService } from './confirmacion-event.service';

describe('ConfirmacionEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmacionEventService]
    });
  });

  it('should be created', inject([ConfirmacionEventService], (service: ConfirmacionEventService) => {
    expect(service).toBeTruthy();
  }));
});
