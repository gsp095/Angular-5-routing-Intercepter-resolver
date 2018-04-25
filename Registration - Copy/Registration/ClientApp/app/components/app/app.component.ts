import { Component } from '@angular/core';
import { AppConfig } from '../../appConfig'
import { UserService } from '../../../_services/index'
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AppConfig, UserService]
})
export class AppComponent {
}
