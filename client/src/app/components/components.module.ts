import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from "../common/common.module";
import {MapComponent} from './map-component/map.component';
import {RegionComponent} from "./region-component/region.component";
import {AgmCoreModule} from "@agm/core";
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';


@NgModule({
  declarations: [
    MapComponent,
    RegionComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBet7D7molKMR5viJVhFc0Obcc_nyVqGQo'
    }),
    AgmSnazzyInfoWindowModule
  ],
  exports: [
    MapComponent, RegionComponent
  ],
  schemas: []
})
export class ComponentsModule {
}
