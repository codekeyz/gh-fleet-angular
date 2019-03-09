import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DriversComponent } from './drivers/drivers.component';
import { MainappComponent } from './mainapp.component';
import { Routes, RouterModule } from '@angular/router';

const mainapproutes: Routes = [
  {
    path: '',
    component: MainappComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(mainapproutes)],
  exports: [RouterModule],
  declarations: [
    MainappComponent,
    DashboardComponent,
    VehiclesComponent,
    DriversComponent
  ]
})
export class MainappModule {}