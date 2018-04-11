import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div class="panel-heading">
      <h1>Form Sample</h1>
    </div>

    <a02Component></a02Component>
    
    <!--
    <a01Component></a01Component>
    -->

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
