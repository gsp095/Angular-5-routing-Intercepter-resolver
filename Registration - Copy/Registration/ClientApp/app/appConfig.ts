import { RequestOptions, Headers } from "@angular/http";

export class AppConfig {
    public readonly apiUrl = 'http://localhost:4000';

    public jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(String(localStorage.getItem('currentUser')));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
};