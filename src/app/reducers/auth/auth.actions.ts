import { User } from '@models/user.model';
import { createAction, props } from '@ngrx/store';

export const login = createAction(
    '[Authentification] User Login',
    props<{ email: string, password: string }>()
);

export const loginSuccess = createAction(
    '[Authentification] Login Success',
    props<{ user: User }>()
);

export const checkAuthentification = createAction(
    '[Authentification] Check user authentification'
);

export const checkAuthentificationSucces = createAction(
    '[Authentification] User is authenticated',
    props<{ user: User | null}>()
);

export const logout = createAction(
    '[Authentification] User Logout'
);

export const logoutSuccess = createAction(
    '[Authentification] Logout Success'
);

export const authFailure = createAction(
    '[Authentification] Authentification Failure',
    props<{ error: string }>()
);