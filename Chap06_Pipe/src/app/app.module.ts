import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PercentPipe, DecimalPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { A01Component } from './components/A01.pipe.component';
import { A02Component } from './components/A02.pipe.component';

@NgModule({
  declarations: [
    AppComponent, A01Component, A02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [PercentPipe, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
