import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, UserService } from '../Services/index';
import { User } from '../models/index';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:  any = {};
  loading = false;
  returnUrl: string;
  user: any = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }
  login() {
    this.loading = true;
    this.userService.login(this.model)
      .subscribe(
        data => {
           this.user = data;
          if ( this.user.status) {
            console.log( this.user);
            this.loading = false;
            if ( this.user.status &&  this.user.value.tokenString) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify( this.user.value));
            }
            // if (this.returnUrl !== '' || this.returnUrl !== undefined) {
            //   this.router.navigate([this.returnUrl]);
            // }
            this.router.navigate(['home']);
          } else {
            this.loading = false;
            this.alertService.error( this.user.message);
          }

        },
        error => {
          this.alertService.error(error._body);
          this.loading = false;
        });
  }

}
