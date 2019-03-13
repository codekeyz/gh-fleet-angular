import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable()
export class DataService {
  constructor(private httpSvc: HttpClient) {}

  getMyAccount<T>() {
    return this.httpSvc.get<T>(`${env.apiBaseUrl}/api/v1/users/me`);
  }

  getMyVehicles<T>() {
    return this.httpSvc.get<T>(`${env.apiBaseUrl}/api/v1/users/me/vehicles`);
  }
}
