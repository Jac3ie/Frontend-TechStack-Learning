import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  // 1) Basic string interpolation: show component fields in HTML
  title = 'Welcome to Angular!';
  msg = 'This is an example of interpolation';

  // 2) Numbers + conditional text
  username = 'Jacky';
  unreadCount = 3;

  // 3) Object + array interpolation (very common in real apps)
  user = { name: 'Alice', role: 'Student' };
  courses = ['Web', 'DSA', 'Security'];

  // 4) Method interpolation: HTML can call methods (keep them fast/simple)
  greet(): string {
    return `Hello, ${this.username}!`;
  }
}