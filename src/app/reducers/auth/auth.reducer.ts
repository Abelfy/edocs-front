import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, authFailure, logout, logoutSuccess, checkAuthentificationSucces, checkAuthentification } from './auth.actions';
import { User } from '@models/user.model';
import { state } from '@angular/animations';

export interface AuthentificationState {
    isAuthenticated: boolean;
    user : User | null;
    error?: string | null;
    isLoading: boolean;
}

const initialState: AuthentificationState = {
    isAuthenticated: false,
    user : null,
    error: null,
    isLoading: false
};

export const authReducer = createReducer(initialState,
  on(login, state => ({ ...state, isLoading: true })),
  on(loginSuccess, (state , { user }) => ({ ...state, user ,isAuthenticated : true, isLoading: false })),
  on(logout, state => ({ ...state, isLoading: true })),
  on(logoutSuccess, (state) => ({ ...state, user : null ,isAuthenticated : false, isLoading: false })),
  on(checkAuthentification, (state) => ({ ...state, isLoading: false })), 
  on(checkAuthentificationSucces, (state , { user }) => ({ ...state,user, isAuthenticated : true, isLoading: false })), 
  on(authFailure, (state, { error }) => ({ ...state, error,isAuthenticated : false, isLoading: false }))
);