import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [RouterModule, CountriesComponent,NotFoundComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {

  title = 'Other Page'

http = inject(HttpClient);

countries: any =[];

ngOnInit(): void {
  this.fetchCountries() ;
}

fetchCountries(){
  this.http.get<any[]>('assets/data.json')
  .subscribe((countries: any) => {
    this.countries = countries;
  })

}

programmer: String = 'Christian Jones' ;

}
