import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  // This is the model value (used for replaying what user typed)
  typedText = '';

  onClickBtn(): void {
    alert('Button clicked!');
  }

  // Event binding example: reacts to keyup + reads event info
  onKeyUp(event: KeyboardEvent): void {
    const key = event.key;
    console.log('Key pressed:', key);
  }

  clear(): void {
    this.typedText = '';
  }
}