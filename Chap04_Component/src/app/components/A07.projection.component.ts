import { Component } from '@angular/core';

@Component({
    selector: 'a07One',
    template: `
        <div class="panel-body">
            <!-- 303 page -->
            <h3>A08 One Component</h3>


        </div>
    `
})
export class A07One {

}

@Component({
    selector: 'a07Component',
    template: `
        <div class="panel-body">
            <h3>A08 Component</h3>

        </div>
        <a07One></a07One>
    `
})
export class A07Component {

}