// A01.child.component
import { Component } from '@angular/core';

@Component({
    selector: 'a01Child',
    template: `
        <div class="panel-body">
            <h3>Child Component</h3>
            <span>Child Component Content</span>
            
            <a01Grand></a01Grand>
        </div>
    `,
    styles: [`
        div { border: 1px solid orange; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})
export class A01ChildComponent { }


