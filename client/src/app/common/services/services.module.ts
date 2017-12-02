import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchService} from "./search.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [],
  providers:[
    SearchService
  ]
})
export class ServicesModule { }
