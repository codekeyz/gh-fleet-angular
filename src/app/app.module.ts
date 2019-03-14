import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

// Import routing module
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { TokenStorage } from './providers/token.storage';

export function jwtOptionsFactory(tokenStorage: TokenStorage) {
  return {
    tokenGetter: () => {
      return tokenStorage.getToken();
    },
    headerName: 'Account-Token',
    authScheme: '',
    blacklistedRoutes: environment.blacklistedRoutes,
    whitelistedDomains: environment.whitelistedDomains
  };
}

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    HttpClientModule,
    NgProgressModule,
    NgProgressRouterModule.withConfig({
      id: 'masterProgress'
    }),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [TokenStorage]
      }
    }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
