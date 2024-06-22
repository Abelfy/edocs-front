import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { Subject, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly authenticated = new Subject<boolean>();
  authenticated$ = this.authenticated.asObservable();

  constructor(private readonly httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post<User>('api/auth/login', { email, password });
  }

  isAuthenticated() {
    return this.httpClient.get<boolean>('api/auth').pipe(
    tap(() => {
      this.authenticated.next(true);
    }),
    catchError(() => [false]));
  }
}
