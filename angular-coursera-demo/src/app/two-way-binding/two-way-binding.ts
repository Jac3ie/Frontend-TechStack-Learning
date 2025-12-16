import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  name = '';

  // small helper: nicer display in template
  get displayName(): string {
    return this.name.trim() || 'Guest';
  }

  clear(): void {
    this.name = '';
  }
}