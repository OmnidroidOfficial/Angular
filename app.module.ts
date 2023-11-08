import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { CreateComponent } from './create/create.component';
import { ContinueComponent } from './continue/continue.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
