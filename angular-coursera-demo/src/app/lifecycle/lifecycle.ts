import { Component, OnInit } from '@angular/core';

/**
 * Lifecycle component (standalone)
 * Stages we touch in this example:
 *  1) Construction: constructor()
 *  2) Initialization hook: ngOnInit()
 *  3) Template render (HTML): shows content based on `initialized`
 */
@Component({
  selector: 'app-lifecycle',
  standalone: true,               // standalone component (no NgModule needed for this component)
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle implements OnInit {
  // This controls what the template will show
  initialized = false;

  /**
   * 1) CONSTRUCTOR
   * - Runs first when Angular creates the component instance.
   * - Good for simple setup / injecting services.
   * - Avoid heavy DOM work here; the view is not ready yet.
   */
  constructor() {
    console.log('[Lifecycle] constructor called');
  }

  /**
   * 2) ngOnInit
   * - Runs after Angular sets up component inputs and is ready to initialize logic.
   * - Common place to: fetch data, start timers, init state.
   */
  ngOnInit(): void {
    this.initialized = true; // triggers a re-render so @if block becomes visible
    console.log('[Lifecycle] ngOnInit called -> initialized =', this.initialized);
  }
}