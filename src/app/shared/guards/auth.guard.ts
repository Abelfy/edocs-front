import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { tap } from 'rxjs';



export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  return authService.isAuthenticated().pipe(
    tap(authenticated => {
      if (!authenticated) {
        router.navigate(['/login']);
      }
  }));
};
