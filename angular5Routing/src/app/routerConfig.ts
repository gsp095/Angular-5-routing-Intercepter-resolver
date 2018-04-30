import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { HnResolver } from './Services/hn.resolver';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
export const appRoutes: Routes = [
 { path: '', redirectTo: './dashboard', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent  },
  { path: 'dashboard', component: DashboardComponent , resolve: { hnData: HnResolver }},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: './dashboard'},
];
