import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DriversComponent } from './drivers/drivers.component';
import { MainappComponent } from './mainapp.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ChartsModule } from 'ng2-charts';
import {
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
} from '@coreui/angular';
import { DataBarsComponent } from './dashboard/data-bars/data-bars.component';

const mainapproutes: Routes = [
  {
    path: '',
    component: MainappComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    AppHeaderModule,
    AppSidebarModule,
    AppFooterModule,
    BsDropdownModule.forRoot(),
    AppBreadcrumbModule.forRoot(),
    PerfectScrollbarModule,
    FormsModule,
    ChartsModule,
    RouterModule.forChild(mainapproutes)
  ],
  exports: [RouterModule],
  declarations: [
    MainappComponent,
    DashboardComponent,
    VehiclesComponent,
    DriversComponent,
    DataBarsComponent
  ]
})
export class MainappModule {}
