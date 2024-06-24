import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { isAuthenticated } from '@reducers/auth';
import { checkAuthentification } from '@reducers/auth/auth.actions';
import { AuthService } from '@shared/services/auth/auth.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  const store: Store = inject(Store);
  const router: Router = inject(Router);
  return store.select(isAuthenticated).pipe(
    switchMap(authenticated => {
      if (!authenticated) {
        store.dispatch(checkAuthentification());
        return store.select(isAuthenticated).pipe(
          catchError(() => {
            router.navigate(['/login']);
            return of(false);
          })
        );
      } else {
        return of(true);
      }
    })
    );
};
