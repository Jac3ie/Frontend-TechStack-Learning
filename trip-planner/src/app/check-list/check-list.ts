import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type CheckItem = { text: string; done: boolean };

@Component({
  selector: 'app-check-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './check-list.html',
  styleUrl: './check-list.css',
})
export class CheckList {
  newItem = '';
  items: CheckItem[] = [
    { text: 'Passport / ID', done: false },
    { text: 'Tickets / Booking', done: false },
    { text: 'Cash / Card', done: false },
  ];

  add() {
    const text = this.newItem.trim();
    if (!text) return;
    this.items.push({ text, done: false });
    this.newItem = '';
  }

  toggle(i: number) {
    this.items[i].done = !this.items[i].done;
  }

  remove(i: number) {
    this.items.splice(i, 1);
  }

  clearDone() {
    this.items = this.items.filter(x => !x.done);
  }
}