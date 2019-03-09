import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable()
export class DataService {
  constructor(private httpSvc: HttpClient) {}

  getMyAccount() {
    return this.httpSvc.get(`${env.apiBaseUrl}/users/me`);
  }
}
