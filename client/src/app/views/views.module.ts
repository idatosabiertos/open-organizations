import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ComponentsModule} from "../common/components/components.module";
import {HomeViewComponent} from "./home.view/home.view.component";
import {AgmCoreModule} from "@agm/core";
import {MapComponent} from "../components/map-component/map.component";
import {CommonModule} from "../common/common.module";

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBet7D7molKMR5viJVhFc0Obcc_nyVqGQo'
    })
  ],
  exports: [
    HomeViewComponent,
    CommonModule
  ],
  declarations: [
    MapComponent,
    HomeViewComponent
  ]
})
export class ViewsModule { }
