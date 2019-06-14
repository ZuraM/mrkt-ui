import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { AuthService } from 'src/app/services/auth.service';

import * as authActions from './auth.actions';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  @Effect({
    dispatch: false
  })
  logout$ = this.actions$.pipe(
    ofType(authActions.ActionTypes.LOGOUT),
    map(() => {
      this.authService.logout();
    })
  );

  @Effect({
    dispatch: false
  })
  setToken$ = this.actions$.pipe(
    ofType(authActions.ActionTypes.SET_TOKEN),
    map((action: authActions.SetToken) => {
      this.authService.setToken(action.payload);
    })
  );

  @Effect()
  login$ = this.actions$.pipe(
    ofType(authActions.ActionTypes.LOGIN),
    switchMap((action: authActions.Login) => {
      return this.httpClient
        .post(`${environment.apiUrl}/auth/logIn`, { email: action.email, password: action.password })
        .pipe(
          switchMap((userInfo: any) => [
            new authActions.LoginSuccess(userInfo.data),
            new authActions.SetToken(userInfo.data.token)
          ]),
          catchError(error => of(new authActions.ActionFail(error)))
        );
    })
  );

  @Effect()
  addUser$ = this.actions$.pipe(
    ofType(authActions.ActionTypes.ADD_USER),
    switchMap((action: authActions.AddUser) => {
      return this.httpClient
        .post(`${environment.apiUrl}/auth/add`, action.payload)
        .pipe(
          switchMap(userInfo => [
            new authActions.AddUserSuccess(),
            new authActions.Login(action.payload.email, action.payload.password)
          ]),
          catchError(error => of(new authActions.ActionFail(error)))
        );
    })
  );
}
