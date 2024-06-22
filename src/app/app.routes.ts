import { Routes } from '@angular/router';
import { MainPage } from './features/home/main.page';
import { authGuard } from '@shared/guards/auth.guard';

export const routes: Routes = [
    { 
        path: 'login',
        loadComponent: () => import('./features/auth/login.component').then(m => m.LoginPage),
        
    },
    {
        path: '',
        component: MainPage,
        canActivate : [authGuard]
    },
    {
        path: '**',
        redirectTo: ''
    },
    
]
