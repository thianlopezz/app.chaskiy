import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SocialService {

    constructor(private http: Http) { }

    getAll() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        const param = encodeURIComponent('<params accion="C" />');
        return this.http.get('/api/social/all/' + param, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    private jwt() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        if (chasker && chasker.token) {
            const headers = new Headers({ 'x-access-token': chasker.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
