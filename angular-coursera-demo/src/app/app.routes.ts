import { Routes } from '@angular/router';
import { Lifecycle } from './lifecycle/lifecycle';
import { Decorator } from './decorator/decorator';
import { DataBinding } from './data-binding/data-binding';
import { Interpolation } from './interpolation/interpolation';
import { PropertyBinding } from './property-binding/property-binding';
import { EventBinding } from './event-binding/event-binding';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { IfForSwitch } from './if-for-switch/if-for-switch';
import { NgStyleDemo } from './ng-style-demo/ng-style-demo';
import { Pipes } from './pipes/pipes';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';

export const routes: Routes = [
    { path: '', redirectTo: 'lifecycle', pathMatch: 'full'}, // default go to lifecycle
    { path: 'lifecycle', component: Lifecycle},
    { path: 'decorator', component: Decorator},
    { path: 'dataBinding', component: DataBinding},
    { path: 'interpolation', component: Interpolation},
    { path: 'property-binding', component: PropertyBinding},
    { path: 'event-binding', component: EventBinding},
    { path: 'two-way-binding', component: TwoWayBinding},
    { path: 'if-for-switch', component: IfForSwitch},
    { path: 'ng-style-demo', component: NgStyleDemo},
    { path: 'pipes', component: Pipes},
    { path: 'template-driven-form', component: TemplateDrivenForm},
    { path: '**', component: Lifecycle},
];
