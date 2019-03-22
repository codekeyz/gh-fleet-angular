import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEvent
} from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private httpSvc: HttpClient) {}

  getMyAccount<T>() {
    return this.httpSvc.get<T>(`${env.apiBaseUrl}/api/v1/users/me`);
  }

  getMyVehicles<T>(params?: {}) {
    return this.httpSvc.get<T>(`${env.apiBaseUrl}/api/v1/users/me/vehicles`, {
      params
    });
  }

  getVehicle<T>(id: string) {
    return this.httpSvc.get<T>(
      `${env.apiBaseUrl}/api/v1/users/me/vehicles/${id}`
    );
  }

  addVehicle<T>(data: {}) {
    return this.httpSvc.post<T>(
      `${env.apiBaseUrl}/api/v1/users/me/vehicles`,
      data
    );
  }

  getUploadUrl(vehicleID: string) {
    return `${
      env.apiBaseUrl
    }/api/v1/users/me/vehicles/${vehicleID}/images/upload`;
  }
}
