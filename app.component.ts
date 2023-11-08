import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { CreateComponent } from './create/create.component';
import { ContinueComponent } from './continue/continue.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent, CreateComponent, ContinueComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Index';
  headerImg = '/assets/logo.png';  
}
