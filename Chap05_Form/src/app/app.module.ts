import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { A01Component } from './components/A01_NgForm';
import { A02Component } from './components/A02_FormGroup';
import { A03Component } from './components/A03_FormArray';
import { A04Component } from './components/A04_FormBuilter';
import { A05Component } from './components/A05_FormGroupValidation';
import { A06Component } from './components/A06_FormGroupValidation';


@NgModule({
  declarations: [
    AppComponent, A01Component, A02Component, A03Component, A04Component, A05Component, A06Component
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
