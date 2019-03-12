import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../providers/auth.service';
import { DataService } from '../providers/data.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderInterceptor } from '../providers/token.interceptor';
import { TokenStorage } from '../providers/token.storage';
import { AuthGuard } from '../guards/auth.guard';
import { NonAuthGuard } from '../guards/non-auth.guard';

@NgModule({
  imports: [CommonModule, AngularFireAuthModule],
  providers: [
    AuthService,
    DataService,
    TokenStorage,
    AuthGuard,
    NonAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true
    }
  ],
  declarations: []
})
export class CoreModule {}
