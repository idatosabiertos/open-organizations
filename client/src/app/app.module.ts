import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GridViewerComponent} from './grid-viewer/grid-viewer.component';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SearchService} from "./common/services/search.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from '@agm/core';

export const ROUTES: Routes = [
  { path: '', component: GridViewerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GridViewerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    CommonModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBet7D7molKMR5viJVhFc0Obcc_nyVqGQo'
    })
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
