import { Component } from '@angular/core';
import { Trip } from '../trip';

@Component({
  selector: 'app-summary',
  standalone: true,
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class Summary {
  constructor(public trip: Trip) {}

  get state() {
    return this.trip.getState();
  }

  get planTotal() {
    return this.state.planItems.length;
  }

  get planDone() {
    return this.state.planItems.filter(p => p.done).length;
  }
}