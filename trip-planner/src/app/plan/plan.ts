import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Style = 'Relax' | 'Adventure' | 'Foodie' | 'Culture';

@Component({
  selector: 'app-plan',
  imports: [FormsModule],
  templateUrl: './plan.html',
  styleUrl: './plan.css',
})
export class Plan {
  // trip basic info fill in & two way binding
  destination: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  budget: number = 0;
  travelers: number = 0;
  style: Style = 'Relax';


}
