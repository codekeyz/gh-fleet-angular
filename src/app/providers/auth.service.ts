import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { TokenStorage } from './token.storage';

@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth, private tkSt: TokenStorage) {}

  async login(email: string, password: string) {
    try {
      const user = await this.afAuth.auth.signInWithEmailAndPassword(
        email,
        password
      );
      const userToken = await user.user.getIdTokenResult();
      await this.tkSt.saveToken(userToken.token);
      return user;
    } catch (e) {
      return null;
    }
  }
}
