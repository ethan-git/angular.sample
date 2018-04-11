// A01.invoke.component.ts

import { Component } from '@angular/core';

@Component({
    selector: 'a01Invoke',
    template: `
        <div class="panel-heading">
            <h3>A01 Invoke</h3>
        </div>

        <div class="panel-body">
            Cost: <input type="number" class="form-control" [(ngModel)]="cost"><br>
            Qty: <input type="number" class="form-control"  [(ngModel)]="qty"><br>
            <br>
            Total: <span>{{cost * qty}}</span><br>
            Total: <span>{{getTotal()}}</span><br>
            <button class="btn btn-primary" (click)="pay()">BUY</button>
        </div>
    `
})

export class A01Component {
    public cost: number = 10;
    public qty: number = 3;
    
    constructor() { }

    public getTotal(): number {
        return this.cost * this.qty;   
    }

    public pay(): void {
        window.alert('Thank Tou!!!');
    }
}
