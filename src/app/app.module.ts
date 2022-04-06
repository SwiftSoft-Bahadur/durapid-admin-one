import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from "@angular/common/http";
import { Chart, registerables } from 'chart.js';
import { MainUserComponent } from './components/users/main-user/main-user.component';
import { ViewUserComponent } from './components/users/view-user/view-user.component';
import { StoreUserComponent } from './components/users/store-user/store-user.component';
import { ToggleDirective } from './directives/toggle/toggle.directive';
import { BindingsComponent } from './components/bindings/bindings.component';
import { AttrDirDirective } from './directives/attr-dir/attr-dir.directive';
Chart.register(...registerables);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DashboardComponent,
    MainUserComponent,
    ViewUserComponent,
    StoreUserComponent,
    ToggleDirective,
    BindingsComponent,
    AttrDirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
