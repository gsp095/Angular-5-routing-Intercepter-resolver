import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app/appConfig';
import { User } from '../_models/index';
@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) { }

    getAll() {
        return this.http.get('/user/GetUsers', this.config.jwt()).map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/users/' + _id, this.config.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/user/Register', user, this.config.jwt());
    }

    update(user: User) {
        return this.http.put('/users/' + user.id, user, this.config.jwt());
    }

    delete(_id: string) {
        return this.http.delete('/users/' + _id, this.config.jwt());
    }    
}