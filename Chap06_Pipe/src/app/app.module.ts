import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PercentPipe, DecimalPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { A01Component } from './components/A01.pipe.component';
import { A02Component } from './components/A02.pipe.component';
import { A03Component } from './components/A03.pipe.component';
import { A04Component } from './components/A04.custom.component';
import { UpDownPipe, ReplacePipe, AbbrPipe } from './pipe/custom.pipe';
import { LimitToPipe, CountPipe, SearchPipe, FieldNamePipe } from './pipe/list.pipe';

@NgModule({
  declarations: [
    AppComponent, A01Component, A02Component, A03Component, A04Component, 
    UpDownPipe, ReplacePipe, AbbrPipe, LimitToPipe, CountPipe, SearchPipe, FieldNamePipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [PercentPipe, DecimalPipe, UpDownPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
