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

  addVehicle<T>(data: {}) {
    return this.httpSvc.post<T>(
      `${env.apiBaseUrl}/api/v1/users/me/vehicles`,
      data
    );
  }

  uploadImageforVehicle(vehicleID: string, file) {
    const headers = new HttpHeaders();
    // this is the important step. You need to set content type as null
    headers.set('Content-Type', null);
    headers.set('Accept', 'multipart/form-data');
    const formData: FormData = new FormData();
    formData.append('image', file);
    return this.httpSvc.post(
      `${env.apiBaseUrl}/api/v1/users/me/vehicles/${vehicleID}/images/upload`,
      formData,
      {
        headers,
        reportProgress: true,
        observe: 'events'
      }
    );
  }
}
