import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchService} from "./search.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CountryService} from "./country.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [],
  providers:[
    SearchService, CountryService
  ]
})
export class ServicesModule { }
