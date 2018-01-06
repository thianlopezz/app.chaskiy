import { EventEmitter } from '@angular/core';
export class ConfirmacionEventService {
  acceptChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  emitAcceptChangeEvent(string) {
    this.acceptChange.emit(string);
  }

  getAcceptChangeEmitter() {
    return this.acceptChange;
  }
}
