import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    
    constructor(private http: Http) { }
 
    login(user: any) {
        
        user.username = user.username.trim();
        user.password = user.password.trim();

        return this.http.post('/api/auth/login/', user)
            .map((response: Response) => {
                
                let _response = response.json();

                if(_response.success){

                    let _user = _response.usuario;
                    if (_user && _user.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(_user));
                        return _response;
                    }
                }
                else
                    return _response;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}