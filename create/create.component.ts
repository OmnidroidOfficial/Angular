import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { COUNTRIES } from '../countrylist';
import { Country } from '../country';

@Component({
  selector: 'main-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  title = 'Index';
  mainCreate = false;
  startOne = false;

  countries = COUNTRIES;
  selectedCountry?: Country;

  RevNxtOne() {

  }
  NxtOne() {

  }
}
