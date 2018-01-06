import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MensajeService {

    private subject = new Subject<any>();

    constructor(private router: Router) {
        // clear alert message on route change
        // router.events.subscribe(event => {
        //     if (event instanceof NavigationStart) {
        //         if (this.keepAfterNavigationChange) {
        //             // only keep for a single location change
        //             this.keepAfterNavigationChange = false;
        //         } else {
        //             // clear alert
        //             this.subject.next();
        //         }
        //     }
        // });
    }

    success(message: string) {

        this.subject.next({ success: true, text: message, tipo: 'Éxito' });
    }

    error(message: string) {

        this.subject.next({ success: false, text: message, tipo: 'Error'  });
    }

    getMessage(): Observable<any> {

        return this.subject.asObservable();
    }
}
