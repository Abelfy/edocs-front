import { Component } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthService } from '@shared/services/auth/auth.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [LoginFormComponent,MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginPage {

  constructor(private readonly authService: AuthService) { }
  
  login(event : { email: string, password: string}){
    this.authService.login(event.email, event.password).subscribe();
  }
}
