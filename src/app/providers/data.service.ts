import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable()
export class DataService {
  constructor(private httpSvc: HttpClient) {}

  getMyAccount() {0']\0]'    return this.http  cgcgcc Svc.get(`${env.apiBaseUrl}/users/me`);
  }

  getMyVehicles<T>() {
    return this.httpSvc.get<T>(`${env.apiBaseUrl}/users/me/vehicles`);
  }
}
