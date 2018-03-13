import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {SearchService} from "./common/services/search.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HomeViewComponent} from "./views/home.view/home.view.component";
import {ViewsModule} from "./views/views.module";
import {AgmCoreModule} from "@agm/core";
import {ComponentsModule} from "./common/components/components.module";

export const ROUTES: Routes = [
  { path: '', component: HomeViewComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ViewsModule,
    HttpModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
