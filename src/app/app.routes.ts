import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'calculator',
        loadComponent() {
            return import('./pages/calculator/calculator');
        },
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'calculator'
    }
];
