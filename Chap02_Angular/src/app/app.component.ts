import { Component } from '@angular/core';

// View
@Component({
  // 이 컴퍼넌트가 호출될때 사용되는 이름
  selector: 'my-app',

  // 실질적으로 표시되는 내용
  template: `
    <h1>Hello {{name}}</h1>

    <hr>
    
    <contentB></contentB>

    <hr>

    <myFooter></myFooter>
  `,
})

// Controller
export class AppComponent  { 
  name = 'Angular'; 
}
