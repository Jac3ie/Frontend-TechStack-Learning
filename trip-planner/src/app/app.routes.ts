import { Routes } from '@angular/router';
import { Plan } from './plan/plan';
import { Home } from './home/home';
import { CheckList } from './check-list/check-list';
import { Summary } from './summary/summary';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'plan', component: Plan },
    { path: 'check-list', component: CheckList },
    { path: 'summary', component: Summary },
    { path: '**', component: Home },
];
