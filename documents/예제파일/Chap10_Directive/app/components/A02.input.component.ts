import { Component } from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>Directive Input</h3>
            </div>

            <div class="panel panel-body">
                <div>ONE</div>
            </div>
            
        </div>
    `
})
export class A02Component {
    public name: string = 'HongGilDong';
    public age: number = 20;
    public info: {address: string, tel: string} = {
        address: 'Seoul',
        tel: '010-1111-2222'
    }
}