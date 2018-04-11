import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './component/header.component';
import { FooterComponent } from './component/footer.component';
// import { AComponent } from './component/contentA.component';
import { BComponent } from './component/contentB.component';

@NgModule({
  // declarations에서 정의된 컴퍼넌트가 사용할 Main 모듈을
  // 미리 등록 할 목적으로 사용
  imports:      [ BrowserModule ],

  // view에 참여할 컴퍼넌트를 미리 메모리에 등록
  declarations: [ AppComponent, HeaderComponent, FooterComponent, BComponent ],

  // 여기에 선언한 컴퍼넌트만 HTML에 참여할 수 있다
  bootstrap:    [ AppComponent, HeaderComponent ]
})
export class AppModule { }
