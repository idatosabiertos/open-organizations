import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from "../common/common.module";
import {MapComponent} from './map-component/map.component';


@NgModule({
  declarations: [
    MapComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
  ],
  exports: [
    MapComponent
  ],
  schemas: []
})
export class ComponentsModule {
}
