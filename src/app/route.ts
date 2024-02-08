import { Routes } from "@angular/router";
import { HomeComponent } from "./Home/home.component";
import { OtherComponent } from "./List/other.component";
import { DisplayComponent } from "./navbar/display.component";


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
