import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [FormsModule], // ✅ ngModel needs this
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  typedText = '';

  // Event binding: button click
  onClickBtn(): void {
    alert('Button clicked!');
  }

  // Event binding: you handle event manually
  onKeyUp(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    console.log('Key pressed:', event.key, '| current input:', input.value);
  }

  // Used by the Clear button
  clear(): void {
    this.typedText = '';
  }
}