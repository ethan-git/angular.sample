import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { GreetService } from './service/A01.greet.service';
import { ThreeDAO } from './service/A03.three.dao.service';
import { ThreeVO } from './service/A03.three.vo.service';
import { AppComponent } from './app.component';
import { A01Component } from './components/A01.service.component';
import { A02Component } from './components/A02.jumsu.component';
import { A03Component } from './components/A03.jumsu.component';
import { A04Component } from './components/A04.mock.component';
import { A05Component } from './components/A05.promise.component';

@NgModule({
  declarations: [
    AppComponent, A01Component, A02Component, 
    A03Component, A04Component, A05Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [GreetService, DecimalPipe, ThreeDAO],
  bootstrap: [AppComponent]
})
export class AppModule { }
