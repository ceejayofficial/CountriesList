import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  title = 'Other Page'

http = inject(HttpClient);

countries: any =[];
filteredCountries: any = [];
searchInput: any;

ngOnInit(): void {
  this.fetchCountries() ;
}

fetchCountries(){
  this.http.get('assets/data.json')
  .subscribe((countries: any) => {
    this.countries = countries;
    this.filteredCountries = [...this.countries];
  })




}

programmer: String = 'Christian Jones' ;

filterCountries(): void {
  this.filteredCountries = this.countries.filter((country: any =[]) =>
    country.name.toLowerCase().includes(this.searchInput.toLowerCase()) ||
    country.region.toLowerCase().includes(this.searchInput.toLowerCase()) ||
    country.capital.toLowerCase().includes(this.searchInput.toLowerCase())
  );
}



}
