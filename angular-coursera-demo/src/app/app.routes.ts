import { Routes } from '@angular/router';
import { Lifecycle } from './lifecycle/lifecycle';
import { Decorator } from './decorator/decorator';

export const routes: Routes = [
    { path: '', redirectTo: 'lifecycle', pathMatch: 'full'}, // default go to lifecycle
    { path: 'lifecycle', component: Lifecycle},
    { path: 'decorator', component: Decorator},
    { path: '**', component: Lifecycle},
];
