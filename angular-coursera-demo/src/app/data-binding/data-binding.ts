import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule], // needed for ngModel
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // ONE-WAY binding demo: shown via {{ status }}
  status = 'pending';

  // TWO-WAY binding demo: synced with <input [(ngModel)]="country">
  country = 'US'; // change here will modify the original text put there, o/w we just append to the tail of it, unless ''!

  // Runs whenever the input changes (because of (ngModelChange))
  displayCountry() {
    console.log('country is now:', this.country);
  }
}