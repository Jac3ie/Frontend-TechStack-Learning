import { Routes } from '@angular/router';
import { Lifecycle } from './lifecycle/lifecycle';
import { Decorator } from './decorator/decorator';
import { DataBinding } from './data-binding/data-binding';
import { Interpolation } from './interpolation/interpolation';
import { PropertyBinding } from './property-binding/property-binding';
import { EventBinding } from './event-binding/event-binding';

export const routes: Routes = [
    { path: '', redirectTo: 'lifecycle', pathMatch: 'full'}, // default go to lifecycle
    { path: 'lifecycle', component: Lifecycle},
    { path: 'decorator', component: Decorator},
    { path: 'dataBinding', component: DataBinding},
    { path: 'interpolation', component: Interpolation},
    { path: 'property-binding', component: PropertyBinding},
    { path: 'event-binding', component: EventBinding},
    { path: '**', component: Lifecycle},
];
