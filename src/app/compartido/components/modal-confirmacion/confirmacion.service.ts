import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/index';

@Injectable()
export class ConfirmacionService {
  private subject = new Subject<any>();

  constructor() {
  }

  go(message: string) {
    this.subject.next({ text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}