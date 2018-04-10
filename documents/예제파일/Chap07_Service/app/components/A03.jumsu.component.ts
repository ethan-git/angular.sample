import { Component } from '@angular/core';

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Jumsu Service</h3>
            </div>

            <div class="panel-body">
                HongGilDong: <br>
                {{hongTotal}}
                <br>
            </div>
        </div>
    `
})
export class A03Component{

}