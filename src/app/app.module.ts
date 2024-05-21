import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ByCapitalPageComponent } from './countries/pages/by-capital-page/by-capital-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ByCapitalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
