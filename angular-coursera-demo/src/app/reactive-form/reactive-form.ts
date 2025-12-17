import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  // ✅ Reactive forms only need ReactiveFormsModule here
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})

/**
 * 	
  • 1) Import ReactiveFormsModule (standalone component: put it in imports: []).
	•	2) Build a FormGroup in TypeScript (often with FormBuilder).
	•	3) Bind the <form> with [formGroup]="myForm".
	•	4) Bind each input with formControlName="..." (must match keys in fb.group({...})).
	•	5) Validate with Validators.* and check state using:
	•	control.valid / control.invalid
	•	control.touched / control.dirty
	•	control.errors
	•	6) Submit using (ngSubmit)="onSubmit()", read values from this.myForm.value.
 */

export class ReactiveForm implements OnInit {
  // The "model" of the form lives in TypeScript (FormGroup + FormControls)
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // ✅ Build the form structure + validators in TS
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Convenience getter to keep template readable (myForm.controls['name'] → f['name'])
  get f() {
    return this.myForm.controls;
  }

  onSubmit(): void {
    // ngSubmit only fires when form submission happens (button type="submit", Enter, etc.)
    if (this.myForm.invalid) {
      // Optional: mark all as touched so errors show immediately
      this.myForm.markAllAsTouched();
      return;
    }

    // ✅ Form values are here
    console.log('Submitted data:', this.myForm.value);
    alert(`Form Submitted!\nName=${this.myForm.value.name}\nEmail=${this.myForm.value.email}`);

    // Optional: reset to empty and clear validation states
    this.myForm.reset();
  }
}