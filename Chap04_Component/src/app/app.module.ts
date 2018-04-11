import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { A01Component } from './components/A01.nested.component';
import { A01ChildComponent } from './components/A01.child.component';
import { A01GrandComponent } from './components/A01.grand.component';
import { A02Component, A02One } from './components/A02.input.component';
import { A03Component, A03One } from './components/A03.inputs.component';
import { A04Component, A04One } from './components/A04.output.component';


@NgModule({
  declarations: [
    AppComponent, A01Component, A01ChildComponent, A01GrandComponent,
    A02Component, A02One, A03Component, A03One, A04Component, A04One
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
