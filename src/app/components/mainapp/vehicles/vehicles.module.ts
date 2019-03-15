import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehiclesViewComponent } from './vehicles-view/vehicles-view.component';
import { VehiclesSingleComponent } from './vehicles-single/vehicles-single.component';
import { VehiclesUploadComponent } from './vehicles-upload/vehicles-upload.component';
import { VehiclesComponent } from './vehicles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule,
    ReactiveFormsModule,
    VehicleRoutingModule
  ],
  declarations: [
    VehiclesComponent,
    VehiclesViewComponent,
    VehiclesSingleComponent,
    VehiclesUploadComponent
  ]
})
export class VehiclesModule {}
