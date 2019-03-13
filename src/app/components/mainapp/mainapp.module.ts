import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriversComponent } from './drivers/drivers.component';
import { MainappComponent } from './mainapp.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
} from '@coreui/angular';
import { WidgetOneComponent } from '../widgets/widget-one/widget-one.component';

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
      },
      {
        path: 'drivers',
        component: DriversComponent,
        data: {
          title: 'Drivers'
        }
      },
      {
        path: 'vehicles',
        loadChildren: './vehicles/vehicles.module#VehiclesModule'
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
    RouterModule.forChild(mainapproutes)
  ],
  exports: [RouterModule],
  declarations: [
    MainappComponent,
    DashboardComponent,
    DriversComponent,
    WidgetOneComponent
  ]
})
export class MainappModule {}
