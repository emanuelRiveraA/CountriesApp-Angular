import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img{
      width: 25px;
    }`
  ]
})
export class CountryTableComponent {

  @Input()
  public countries:  Country[] = [];

  @Input()
  public regions: Region[] = [];

}
