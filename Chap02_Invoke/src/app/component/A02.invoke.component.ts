// A01.invoke.component.ts

import { Component } from '@angular/core';

@Component({
    selector: 'a02Invoke',
    template: `
        <div class="panel-heading">
            <h3>A02 Invoke</h3>
        </div>

        <div class="panel-body">
            Cost: <input type="number" class="form-control" [(ngModel)]="cost"><br>
            Qty: <input type="number" class="form-control"  [(ngModel)]="qty"><br>
            Country:
                <select class="form-control" [(ngModel)]="inCurr">
                    <!-- for(let item of country) { -->
                    <option *ngFor="let item of country">{{item}}</option>
                    <!-- } -->
                </select>
            <br>
            <!-- currency : currencyString[USD,EUR...] : "code"|"symbol"|"symbol-narrow" : '1.min-max' -->
            Total: <span *ngFor="let item of country">{{ getTotal(item) | currency : item : "symbol-narrow" : '1.1-3' }} &nbsp; </span><br>
            <button class="btn btn-primary" (click)="pay()">BUY</button>
        </div>
    `
})

export class A02Component {
    public cost: number = 10;
    public qty: number = 3;
    
    public inCurr: string = 'USD';
    public country: Array<string> = ['USD', 'EUR', 'CNY'];
    public rate: {[key:string] : number} = {
        'USD' : 1.0,
        'EUR' : 1.37,
        'CNY' : 6.57
    }

    constructor() { }

    public getTotal(outCurr: string): number {
        return this.cost * this.qty * this.rate[outCurr] / this.rate[this.inCurr];
    }

    public pay(): void {
        window.alert('Thank Tou!!!');
    }
}
