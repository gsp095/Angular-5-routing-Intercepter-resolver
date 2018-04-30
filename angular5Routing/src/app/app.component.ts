import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   logout() {
        // remove user from local storage to log user out
        console.log(localStorage.getItem('currentUser'));
        localStorage.removeItem('currentUser');
        console.log(localStorage.getItem('currentUser'));
      }
}
