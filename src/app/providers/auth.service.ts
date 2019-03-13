import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { TokenStorage } from './token.storage';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth,
    private tkSt: TokenStorage,
    private httpSvc: HttpClient
  ) {}

  async login(email: string, password: string) {
    try {
      const user = await this.afAuth.auth.signInWithEmailAndPassword(
        email,
        password
      );
      await this.refresh();
      return user;
    } catch (e) {
      return null;
    }
  }

  async logout() {
    await this.tkSt.signOut();
    return this.afAuth.auth.signOut();
  }

  register(username: string, email: string, password: string) {
    return this.httpSvc.post(`${env.apiBaseUrl}/api/v1/users/register`, {
      email,
      username,
      password
    });
  }

  async refresh() {
    const token = await this.afAuth.auth.currentUser.getIdToken();
    this.tkSt.saveToken(token);
  }
}
