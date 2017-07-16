import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class ConfirmService {
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