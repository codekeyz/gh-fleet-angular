import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../providers/auth.service';
import { DataService } from '../providers/data.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TokenStorage } from '../providers/token.storage';
import { AuthGuard } from '../guards/auth.guard';
import { NonAuthGuard } from '../guards/non-auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '@auth0/angular-jwt';
import { RefreshTokenInterceptor } from '../providers/refresh-token-interceptor';

@NgModule({
  imports: [CommonModule, AngularFireAuthModule],
  providers: [
    AuthService,
    JwtInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptor,
      multi: true
    },
    DataService,
    TokenStorage,
    AuthGuard,
    NonAuthGuard
  ],
  declarations: []
})
export class CoreModule {}
