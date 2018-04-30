import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(-100%)'
          }),
          {optional: true}),

        // move page off screen right on leave
        query(':leave',
          animate('0ms ease',
            style({
              position: 'fixed',
              width: '100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional: true}),

        // move page in screen from left to right
        query(':enter',
          animate('200ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional: true}),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app';
   logout() {
        // remove user from local storage to log user out
        console.log(localStorage.getItem('currentUser'));
        localStorage.removeItem('currentUser');
        console.log(localStorage.getItem('currentUser'));
      }
      getRouteAnimation(outlet) {
        return outlet.activatedRouteData.animation;
      }
}
