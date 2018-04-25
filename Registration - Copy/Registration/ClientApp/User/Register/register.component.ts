import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../../_services/index';
import { User } from '../../_models/index';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
  providers: [UserService, AlertService]
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
       
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
            data => {
                debugger;
                let userResult = data.json();
                if (userResult.status == true) {
                    this.loading = false;
                    this.model = {};
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(["login"]);
                }
                else {
                    this.alertService.error(userResult.message, true);
                    this.loading = false;
                }
            },
            error => {
                this.alertService.error(error._body);
                this.loading = false;
            });
    }
}