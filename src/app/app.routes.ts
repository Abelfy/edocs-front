import { Routes } from '@angular/router';
import { MainPage } from './features/home/main.page';
import { authGuard } from '@shared/guards/auth.guard';

export const routes: Routes = [
    { 
        path: 'login',
        loadComponent: () => import('./features/auth/login.page').then(m => m.LoginPage),
        
    },
    { 
        path: 'versions',
        loadComponent: () => import('./features/versions/versions.page').then(m => m.VersionsPage),
        canActivate : [authGuard]
        
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
