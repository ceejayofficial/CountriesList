import { Routes } from "@angular/router";
import { SwitchModeComponent } from './switch-mode/switch-mode.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountriesComponent } from './countries/countries.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'display',
    component: HomeComponent,
    title: 'Display Page',
  }


  ];
