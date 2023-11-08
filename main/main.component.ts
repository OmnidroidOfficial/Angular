import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from '../create/create.component';
import { ContinueComponent } from '../continue/continue.component';

@Component({
  selector: 'main-index',
  standalone: true,
  imports: [CommonModule, CreateComponent, ContinueComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'Index';
  mainIndex = false;
  mainCreate = true;
  mainContinue = true;

  nxtStart() {
    this.mainIndex = true;
    this.mainCreate = false;
  }

  nxtContinue() {
    this.mainIndex = true;
    this.mainContinue = false;
  }

  nxtRevert() {
    this.mainIndex = false;
    this.mainCreate = true;
    this.mainContinue = true;
  }
}
