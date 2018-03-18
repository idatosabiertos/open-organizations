import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HomeViewComponent} from "./home.view/home.view.component";
import {AgmCoreModule} from "@agm/core";
import {MapComponent} from "../components/map-component/map.component";
import {CommonModule} from "../common/common.module";
import {RegionComponent} from "../components/region-component/region.component";
import {ComponentsModule} from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [

    CommonModule,
    ComponentsModule,
    CommonModule
  ],
  declarations: [
    HomeViewComponent
  ]
})
export class ViewsModule { }
