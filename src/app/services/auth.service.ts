import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import * as fromApp from '../store/app.reducers';
import * as fromAuthActions from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  setToken(token: any) {
    window.localStorage.setItem('access_token', token);
  }

  getToken(): string {
    return window.localStorage.getItem('access_token');
  }

  logout() {
    window.localStorage.removeItem('access_token');
  }

  checkAccessToken(): boolean {
    const accessToken = window.localStorage.getItem('access_token');

    const jwtHelper = new JwtHelperService();

    if (!accessToken || accessToken === 'undefined') {
      return false;
    }

    if (jwtHelper.isTokenExpired(accessToken)) {
      this.store.dispatch(new fromAuthActions.Logout());
    }

    return !jwtHelper.isTokenExpired(accessToken);
  }

  decodeToken(): any {
    const jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(this.getToken());
  }
}
