import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { SwitchModeComponent } from './switch-mode/switch-mode.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountriesComponent } from './countries/countries.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';

// import { AppComponent } from './app.component';

export const routes: Routes = [
{
  path: 'countries',
  component: CountriesComponent,
  title: 'Home Page',

},
{
  path: '***',
  component: NotFoundComponent,
  title: 'loading',

}




];
