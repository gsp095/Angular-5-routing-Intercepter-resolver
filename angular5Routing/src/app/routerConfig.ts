import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { HeroListBasicComponent } from './hero/hero-list-basic.component';

export const appRoutes: Routes = [
 { path: '', redirectTo: './home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hero', component: HeroListBasicComponent },
  { path: '**', redirectTo: './home'},
];
