import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="panel-body">
      <h1>Component</h1>
    </div>

    <a04Component></a04Component>

    <!--
    <a03Component></a03Component>
    <a02Component></a02Component>
    <a01Component></a01Component>
    <a01Child></a01Child>
    -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
