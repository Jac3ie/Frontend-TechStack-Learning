// if-for-switch.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-if-for-switch',
  standalone: true,
  templateUrl: './if-for-switch.html',
  styleUrl: './if-for-switch.css',
})
export class IfForSwitch {
  // used by @if
  showList = true;

  // used by @for
  items = ['Angular', 'React', 'Vue'];

  // used by @switch
  status: 'idle' | 'loading' | 'done' | 'unknown' = 'idle';

  toggleList(): void {
    this.showList = !this.showList;
  }

  nextStatus(): void {
    const order: Array<typeof this.status> = ['idle', 'loading', 'done', 'unknown'];
    const idx = order.indexOf(this.status);
    this.status = order[(idx + 1) % order.length];
  }
}