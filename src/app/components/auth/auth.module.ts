import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SharedModule } from '../../shared/shared.module';

const authroutes: Routes = [
  {
    path: '',
    component: AuthComponent,
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
    SharedModule,
    RouterModule.forChild(authroutes),
    AngularFireAuthModule
  ],
  exports: [RouterModule],
  declarations: [AuthComponent, LoginComponent, RegisterComponent]
})
export class AuthModule {}
