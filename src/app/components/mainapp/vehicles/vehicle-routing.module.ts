import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles.component';
import { VehiclesViewComponent } from './vehicles-view/vehicles-view.component';
import { VehiclesUploadComponent } from './vehicles-upload/vehicles-upload.component';
import { VehiclesSingleComponent } from './vehicles-single/vehicles-single.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent,
    data: {
      title: 'Vehicles'
    },
    children: [
      {
        path: '',
        redirectTo: 'view',
        pathMatch: 'full'
      },
      {
        path: 'view',
        component: VehiclesViewComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'view/:id',
        component: VehiclesSingleComponent,
        data: {
          title: 'Details'
        }
      },
      {
        path: 'add-new',
        component: VehiclesUploadComponent,
        data: {
          title: 'Add New'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule {}
