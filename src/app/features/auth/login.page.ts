import { Component } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthService } from '@shared/services/auth/auth.service';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '@reducers/auth/auth.actions';

@Component({
  standalone: true,
  imports: [LoginFormComponent,MatCardModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss'
})
export class LoginPage {

  constructor(private readonly store: Store,private readonly router : Router) { }
  
  login(event : { email: string, password: string}){
    this.store.dispatch(login({email: event.email, password: event.password}));
  }
}
