import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehiclesViewComponent } from './vehicles-view/vehicles-view.component';
import { VehiclesSingleComponent } from './vehicles-single/vehicles-single.component';
import { VehiclesUploadComponent } from './vehicles-upload/vehicles-upload.component';
import { VehiclesComponent } from './vehicles.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { FileUploadModule } from 'ng2-file-upload';
import { ImagePreview } from '../../../providers/image-preview.directive';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    VehicleRoutingModule
  ],
  declarations: [
    ImagePreview,
    VehiclesComponent,
    VehiclesViewComponent,
    VehiclesSingleComponent,
    VehiclesUploadComponent
  ]
})
export class VehiclesModule {}
