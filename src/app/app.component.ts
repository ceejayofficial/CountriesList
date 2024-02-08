import { Component, Injector, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwitchModeComponent } from './switch-mode/switch-mode.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountriesComponent } from './countries/countries.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [
    CommonModule,
    RouterModule,
    CountriesComponent,
    NavbarComponent,
    SwitchModeComponent,
    SearchComponent,
    NotFoundComponent,
    FooterComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {


}

