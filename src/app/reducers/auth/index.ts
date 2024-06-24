import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthentificationState } from './auth.reducer';

const selectLogin = createFeatureSelector<AuthentificationState>('auth');

export const isAuthenticated = createSelector(
  selectLogin,
  (state) => state.isAuthenticated
);

export const selectUser = createSelector(
    selectLogin,
    (state) => state.user
  );
  

export const selectError = createSelector(
  selectLogin,
  (state) => state.error
);

export const selectIsLoading = createSelector(
  selectLogin,
  (state) => state.isLoading
);