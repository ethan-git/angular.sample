import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div class="panel-heading">
      <h1>Pipe & Custom Pipe</h1>
    </div>

    <a04Component></a04Component>
    <a03Component></a03Component>
    <a02Component></a02Component>
    <a01Component></a01Component>
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
