import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main-continue',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.css']
})
export class ContinueComponent {
  title = 'Index';
  mainContinue = false;
}
