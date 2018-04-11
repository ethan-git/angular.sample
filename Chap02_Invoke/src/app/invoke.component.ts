// invoke.component.ts

import { Component } from '@angular/core';

@Component({
    selector: 'invoke',
    template: `
        <div class="panel-heading">
            <h1>Invoke Sample</h1>
        </div>

        <a03Invoke></a03Invoke>

        <a02Invoke></a02Invoke>

        <a01Invoke></a01Invoke>
        
    `
})

export class InvokeComponent {
    constructor() { }   
}