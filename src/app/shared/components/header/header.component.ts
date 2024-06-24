import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '@shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { isAuthenticated, selectUser } from '@reducers/auth';
import { checkAuthentification, logout } from '@reducers/auth/auth.actions';
import { User } from '@models/user.model';

@Component({
  selector: 'edocs-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn$: Observable<boolean> = this.store.select(isAuthenticated);
  user$: Observable<User | null> = this.store.select(selectUser);


  constructor(private readonly store: Store) { }


  onLogout(): void {
    this.store.dispatch(logout());
  } 
}
