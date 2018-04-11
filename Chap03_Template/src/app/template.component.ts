// template.component.ts
// ngComponent

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'myTemplate',
    template: `
        <div class="panel-heading">
            <h1>Template Sample</h1>
        </div>

        <a08Component></a08Component>

        <a07Component></a07Component>

        <a06Component></a06Component>

        <a05Component></a05Component>
        
        <a04Component></a04Component>

        <a03Component></a03Component>

        <a02Component></a02Component>
        
        <a01Component></a01Component>
    `
})
export class TempComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
