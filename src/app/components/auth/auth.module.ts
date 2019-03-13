import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { NonAuthGuard } from '../../guards/non-auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';

const authroutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [NonAuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'prefix'
      },
      {
        path: 'signin',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgProgressModule,
    ReactiveFormsModule,
    RouterModule.forChild(authroutes)
  ],
  exports: [RouterModule],
  declarations: [AuthComponent, LoginComponent, RegisterComponent]
})
export class AuthModule {}
