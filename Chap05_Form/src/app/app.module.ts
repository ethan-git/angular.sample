import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { A01Component } from './components/A01_NgForm';
import { A02Component } from './components/A02_FormGroup';


@NgModule({
  declarations: [
    AppComponent, A01Component, A02Component
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
