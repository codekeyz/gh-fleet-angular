import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehiclesViewComponent } from './vehicles-view/vehicles-view.component';
import { VehiclesSingleComponent } from './vehicles-single/vehicles-single.component';
import { VehiclesUploadComponent } from './vehicles-upload/vehicles-upload.component';
import { VehiclesComponent } from './vehicles.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, VehicleRoutingModule],
  declarations: [
    VehiclesComponent,
    VehiclesViewComponent,
    VehiclesSingleComponent,
    VehiclesUploadComponent
  ]
})
export class VehiclesModule {}
