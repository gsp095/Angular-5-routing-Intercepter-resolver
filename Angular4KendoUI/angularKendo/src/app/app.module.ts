import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule, PDFModule, ExcelModule  } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { AppComponent } from './app.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule} from './header/header.module';
import { HomeComponent} from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: AppComponent, data: { title: 'index' } },
  { path: '', component: HomeComponent, data: { title: 'home' } },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
      ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    DateInputsModule,
    DialogsModule,
    ButtonsModule,
    HeaderModule,
    RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
