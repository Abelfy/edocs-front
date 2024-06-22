import { Routes } from '@angular/router';
import { MainPage } from './features/home/main.page';

export const routes: Routes = [
    {
        path: '',
        component: MainPage
    },
    { 
        path: 'login',
        loadComponent: () => import('./features/auth/login.component').then(m => m.LoginPage)
    }
]
