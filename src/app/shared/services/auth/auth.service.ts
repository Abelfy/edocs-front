import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient) { }

  login(email: string, password: string) {
    //return this.httpClient.post<User>('http://localhost:3000/login', { email, password });
  }

  /* isAuthenticated(): boolean {

  } */
}
