import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
export class TemplateDrivenForm {
  // Template-driven: form values come from ngForm + ngModel (defined in HTML)
  submitForm(form: NgForm): void {
    if (form.invalid) return;

    const { name, email } = form.value;
    alert(`Submitted!\nName: ${name}\nEmail: ${email}`);

    form.resetForm(); // reset values + validation state
  }
}