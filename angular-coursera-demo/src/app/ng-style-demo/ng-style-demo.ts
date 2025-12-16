import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-ng-style-demo',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './ng-style-demo.html',
  styleUrl: './ng-style-demo.css',
})
export class NgStyleDemo {
  fontSize = 16;
  fontColor = 'green';
}