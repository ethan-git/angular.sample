import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvokeComponent } from './invoke.component';
import { A01Component } from './component/A01.invoke.component';
import { A02Component } from './component/A02.invoke.component';
import { A03Component } from './component/A03.invoke.component';


@NgModule({
  declarations: [
    InvokeComponent, A01Component, A02Component, A03Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ InvokeComponent ]
})
export class AppModule { }
