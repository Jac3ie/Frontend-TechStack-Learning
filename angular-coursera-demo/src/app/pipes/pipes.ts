import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule], // gives you common pipes like uppercase/date/currency/number
  templateUrl: './pipes.html',
  styleUrls: ['./pipes.css'],
})
export class Pipes {
  // demo values
  text = 'Hello Haicheng!';
  date = new Date();
  amount = 99.99;
}