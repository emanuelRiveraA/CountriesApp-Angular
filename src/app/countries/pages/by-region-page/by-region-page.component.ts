import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public regions: Region[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByRegion( region: string): void {

    this.countriesService.searchRegion( region )
      .subscribe( regions => {
        this.regions = this.regions; 
      });
  }
}
