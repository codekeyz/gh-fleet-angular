import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../providers/auth.service';
import { DataService } from '../providers/data.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderInterceptor } from '../providers/token.interceptor';
import { TokenStorage } from '../providers/token.storage';

@NgModule({
  imports: [CommonModule],
  exports: [FormsModule, AngularFireAuthModule, HttpClientModule],
  providers: [
    AuthService,
    DataService,
    TokenStorage,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true
    }
  ],
  declarations: []
})
export class SharedModule {}
