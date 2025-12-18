import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Trip } from '../trip';

type Style = 'Relax' | 'Adventure' | 'Foodie' | 'Culture';

type PlanItem = {
  day: number;
  time: string;
  activity: string;
  done: boolean;
};

@Component({
  selector: 'app-plan',
  imports: [FormsModule],
  templateUrl: './plan.html',
  styleUrl: './plan.css',
})
export class Plan {
  // trip basic info fill in & two way binding
  destination: string = '';
  startDate = '';
  endDate = '';
  budget: number = 0;
  travelers: number = 0;
  style: Style = 'Relax';

  // plan builder
  planItems: PlanItem[] = [];

  // form inputs for adding a plan item
  newDay = 1;
  newTime = '09:00';
  newActivity = '';

  constructor(private trip: Trip) {
    // load initial values from service
    const saved = this.trip.getState();
    this.destination = saved.destination;
    this.startDate = saved.startDate;
    this.endDate = saved.endDate;
    this.budget = saved.budget;
    this.travelers = saved.travelers;
    this.style = saved.style;
    this.planItems = saved.planItems;
  }


  addItem() {
    const activity = this.newActivity.trim();
    if (!activity) return;

    this.planItems.push({
      day: this.newDay,
      time: this.newTime,
      activity,
      done: false,
    });

    // reset only the activity (keep day/time for fast entry)
    this.newActivity = '';
    this.syncToService();
  }

  removeItem(index: number) {
    this.planItems.splice(index, 1);
  }

  toggleDone(index: number) {
    this.planItems[index].done = !this.planItems[index].done;
  }

  // suggestions
  get suggestions(): string[] {
    switch (this.style) {
      case 'Foodie':
        return ['Night market', 'Street food tour', 'Local café hop'];
      case 'Adventure':
        return ['Hike viewpoint', 'Kayak / rafting', 'Zipline'];
      case 'Culture':
        return ['Museum visit', 'Temple walk', 'Old town photo route'];
      case 'Relax':
      default:
        return ['Massage + spa', 'Slow café morning', 'Sunset park walk'];
    }
  }

  addSuggestion(text: string) {
    this.newActivity = text;
    this.addItem();
  }

  syncToService() {
    this.trip.setState({
      destination: this.destination,
      startDate: this.startDate,
      endDate: this.endDate,
      budget: this.budget,
      travelers: this.travelers,
      style: this.style,
      planItems: this.planItems,
    });
  }
}
