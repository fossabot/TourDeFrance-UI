import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import 'hammerjs'; // Gesture support for some material components
import { RestangularModule, Restangular } from 'ng2-restangular';

import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { DrinksComponent } from './components/management/drinks/drinks.component';
import { RacesComponent } from './components/management/races/races.component';
import { RidersComponent } from './components/management/riders/riders.component';
import { StagesComponent } from './components/management/stages/stages.component';
import { TeamsComponent } from './components/management/teams/teams.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ConfigComponent } from './components/admin/config/config.component';
import { UsersComponent } from './components/admin/users/users.component';

// Function for settting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  const apiUrl: string = window.location.protocol.concat('//').concat(window.location.hostname).concat('/api');
  RestangularProvider.setBaseUrl(apiUrl);
  RestangularProvider.setDefaultHeaders({ 'Accept': 'application/json' });
}

@NgModule({
  declarations: [
    AppComponent,
    DrinkComponent,
    MenuComponent,
    HeaderComponent,
    DrinksComponent,
    RacesComponent,
    RidersComponent,
    StagesComponent,
    TeamsComponent,
    LoginComponent,
    HomeComponent,
    ConfigComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
