import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/user.model';
import { Subject, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient, private readonly router: Router) { }

  login(email: string, password: string) {
    return this.httpClient.post<User>('api/auth/login', { email, password });
  }

  isAuthenticated() {
    return this.httpClient.get<User>('api/auth').pipe(
      catchError(() => [null]));
  }

  logout() {
    return this.httpClient.post('api/auth/logout', {});
  }
}
