import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { User } from '../_models/index';
import { AppConfig } from '../app/appConfig';
@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }

    login(user:User) {
        return this.http.post('/user/Login',user)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let userSuccess = response.json();
                if (userSuccess && userSuccess.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(userSuccess));
                }
                return userSuccess;
            });
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}