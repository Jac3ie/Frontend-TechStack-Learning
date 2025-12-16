import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  // Bound to DOM property: button.disabled
  isDisabled = true;

  // Bound to DOM property: input.value
  getInitialVal(): string {
    return 'Initial value...';
  }

  // Small toggle so you can see binding change in real time
  toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }
}