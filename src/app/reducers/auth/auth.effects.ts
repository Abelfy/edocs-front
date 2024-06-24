import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loginSuccess, authFailure, login, logout, logoutSuccess, checkAuthentification,checkAuthentificationSucces } from './auth.actions';
import { AuthService } from '@shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap(({ email, password }) =>
                this.authService.login(email, password).pipe(
                    tap(() => this.router.navigate(['/'])),
                    map(user => loginSuccess({ user })),
                    catchError(error => of(authFailure({ error })))
                )
            )
        )
    );

    isAuthenticated$ = createEffect(() =>
        this.actions$.pipe(
            ofType(checkAuthentification),
            switchMap(() =>
                this.authService.isAuthenticated().pipe(
                    map(user => checkAuthentificationSucces({user})),
                    catchError(error => of(authFailure({ error })))
                )
            )
        )
    );

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logout),
            switchMap(() =>
                this.authService.logout().pipe(
                    tap(() => this.router.navigate(['/login'])),
                    map(user => logoutSuccess()),
                    catchError(error => of(authFailure({ error })))
                )
            )
        )
    );

    constructor(private actions$: Actions, private authService: AuthService, private readonly router :Router) { }
}