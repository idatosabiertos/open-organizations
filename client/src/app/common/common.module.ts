import { NgModule } from '@angular/core';
import { CommonModule as CommonAngularModule } from '@angular/common';
import {ComponentsModule} from "./components/components.module";
import {ServicesModule} from "./services/services.module";

@NgModule({
  imports: [
    CommonAngularModule, ComponentsModule, ServicesModule
  ],
  exports: [ CommonAngularModule, ComponentsModule, ServicesModule],
  declarations: []
})
export class CommonModule { }
