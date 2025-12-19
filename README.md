# Frontend Tech Stack Learning

A small learning repo built while following Coursera (Board Infinity) frontend track.  
It contains short HTML/JavaScript exercises and two Angular apps: a topic-by-topic Angular sandbox and a small “Trip Planner” mini-project.

## Tech stack
- HTML / CSS / JavaScript
- TypeScript
- Angular (standalone components, routing) — `@angular/*` v21

## Repository structure
- `HTML/` — basic HTML practice pages  
- `JavaScript/` — JS practice files (functions, DOM, small demos)  
- `angular-coursera-demo/` — Angular sandbox app (one route per topic)  
- `trip-planner/` — final mini-project (3-page SPA)

## What I practiced (Angular)
In **`angular-coursera-demo/`** I implemented small, isolated components to learn and test:

- **Component basics**: standalone components (`@Component`) + template + styles
- **Lifecycle**: `constructor` vs `ngOnInit()` and when each runs
- **Decorators**: common Angular decorators in context (`@Component`, `@Input`, etc.)
- **Data binding**
  - Interpolation: `{{ value }}`
  - Property binding: `[value]`, `[class.active]`, etc.
  - Event binding: `(click)`, `(input)`, etc.
  - Two-way binding: `[(ngModel)]`
- **Control flow / directives**: modern template control flow (`@if`, `@for`) and conditional UI patterns
- **Styling**: `ngStyle` demo and basic component styling
- **Pipes**: formatting values directly in templates (built-in pipe usage)
- **Forms**
  - Template-driven forms (`FormsModule`, `ngModel`)
  - Reactive forms (`ReactiveFormsModule`, `FormBuilder`, `Validators`)
- **Routing (SPA)**: route-based navigation using `<router-outlet>` and `Routes[]`

## Final mini project: Trip Planner (Angular)
In **`trip-planner/`** I built a lightweight **Single Page Application (SPA)** with routing:

- **Home**: 3 full-height panels that navigate to:
  - **Plan**: enter trip basics + build a day-by-day activity list (add / mark done / remove)
  - **Check List**: quick packing checklist (simple add/toggle/remove)
  - **Summary**: read-only overview of the trip
- **Shared state via a service (DI)**: a `Trip` service acts as a single source of truth so data entered on **Plan** can be reused by **Summary**.

This project intentionally stays simple while still demonstrating core Angular concepts: routing, components, template-driven forms, and a shared service.

## How to run

### Angular sandbox
```bash
cd angular-coursera-demo
npm install
npm start
```

### Trip Planner
```bash
cd trip-planner
npm install
npm start
