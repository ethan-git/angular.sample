import { Component } from '@angular/core';

@Component({
    selector: 'a04One',
    template: `
        <div class="panel-body">
            <!-- 288 page -->
            Name: <br>
            <button class="btn btn-primary">Send Name</button>
            <button class="btn btn-primary">Send Object</button>
        </div>
    `
})
export class A04One {

}


@Component({
    selector: 'a04Component',
    template: `
        <div class="panel-body">
            <h3>EventEmitter</h3>
            
            <div>

            </div>

            <a04One></a04One>
        </div>
    `
})
export class A04Component {

}
