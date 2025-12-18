import { Injectable } from '@angular/core';

type Style = 'Relax' | 'Adventure' | 'Foodie' | 'Culture';

type PlanItem = {
  day: number;
  time: string;
  activity: string;
  done: boolean;
};

type TripState = {
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  travelers: number;
  style: Style;
  planItems: PlanItem[];
};

@Injectable({
  providedIn: 'root',
})
export class Trip {
  // single source of truth shared across pages
  private state: TripState = {
    destination: '',
    startDate: '',
    endDate: '',
    budget: 0,
    travelers: 1,
    style: 'Relax',
    planItems: [],
  };

  getState(): TripState {
    return this.state;
  }

  setState(next: TripState) {
    this.state = next;
  }

  reset() {
    this.state = {
      destination: '',
      startDate: '',
      endDate: '',
      budget: 0,
      travelers: 1,
      style: 'Relax',
      planItems: [],
    };
  }
}