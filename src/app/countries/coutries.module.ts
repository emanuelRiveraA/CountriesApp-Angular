import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    ByCapitalPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule, //importamos el route module
    SharedModule
  ]
})
export class CoutriesModule { }
