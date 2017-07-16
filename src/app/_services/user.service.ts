﻿import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {

    currentUser: any;
    
    constructor(private http: Http) { this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

    getAll() {

        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {

        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {

        return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {

        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {

        if (this.currentUser && this.currentUser.token) {
            let headers = new Headers({ 'x-access-token': this.currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}