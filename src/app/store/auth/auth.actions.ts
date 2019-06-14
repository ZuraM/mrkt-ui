import { Action } from '@ngrx/store';

export enum ActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  SET_TOKEN = '[Auth] Set Token',
  SET_TOKEN_SUCCESS = '[Auth] Set Token Success',
  ADD_USER = '[Auth] Add User',
  ADD_USER_SUCCESS = '[Auth] Add User Success',
  SET_USER_INFO = '[Auth] Set User Info',
  SET_USER_INFO_SUCCESS = '[Auth] Set User Info Success',
  ACTION_SUCCESS = '[Auth] Action Success',
  ACTION_FAIL = '[AUTH] Action FAIL',
  LOGOUT = '[Auth] Logout'
}

export class Login implements Action {
  readonly type = ActionTypes.LOGIN;

  constructor(public email: any, public password: any) { }
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: any) { }
}

export class AddUser implements Action {
  readonly type = ActionTypes.ADD_USER;

  constructor(public payload: any) { }
}

export class SetToken implements Action {
  readonly type = ActionTypes.SET_TOKEN;

  constructor(public payload: any) { }
}

export class SetTokenSuccess implements Action {
  readonly type = ActionTypes.SET_TOKEN_SUCCESS;
}

export class AddUserSuccess implements Action {
  readonly type = ActionTypes.ADD_USER_SUCCESS;
}

export class SetUserInfo implements Action {
  readonly type = ActionTypes.SET_USER_INFO;

  constructor(public payload: any) { }
}

export class SetUserInfoSuccess implements Action {
  readonly type = ActionTypes.SET_USER_INFO_SUCCESS;

  constructor(public payload: any) { }
}

export class Logout implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export class ActionSuccess implements Action {
  readonly type = ActionTypes.ACTION_SUCCESS;

  constructor(public payload: any) { }
}

export class ActionFail implements Action {
  readonly type = ActionTypes.ACTION_FAIL;

  constructor(public payload: any) { }
}

export type AuthActions =
  | Login
  | LoginSuccess
  | SetToken
  | SetTokenSuccess
  | AddUser
  | AddUserSuccess
  | SetUserInfo
  | SetUserInfoSuccess
  | Logout
  | ActionFail;
