import * as authActions from './auth.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AuthState {
  userInfo: any;
  authenticated: boolean;
  token: string;
  loading: boolean;
}

const initialState: AuthState = {
  userInfo: {},
  authenticated: false,
  token: null,
  loading: false
};

export function authReducer(
  state = initialState,
  action: authActions.AuthActions
) {
  switch (action.type) {
    case authActions.ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        token: action.payload.token
      };
    case authActions.ActionTypes.SET_USER_INFO_SUCCESS:
      const userInfo = action.payload;
      const fullName = userInfo.fullName.split(' ');
      userInfo['firstName'] = fullName[0];
      userInfo['lastName'] = fullName[1];
      return {
        ...state,
        authenticated: true,
        userInfo
      };
    case authActions.ActionTypes.ACTION_FAIL:
      return {
        ...state
      };
    case authActions.ActionTypes.LOGOUT:
      return {
        ...state,
        authenticated: false,
        token: null,
        userInfo: {}
      };
    default:
      return state;
  }
}

export const getUserInfo = (state: AuthState) => state.userInfo;
export const getIsAuthenticated = (state: AuthState) => state.authenticated;

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUserInfo = createSelector(
  selectAuthState,
  getUserInfo
);
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  getIsAuthenticated
);
