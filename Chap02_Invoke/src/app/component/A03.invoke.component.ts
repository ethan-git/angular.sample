// A01.invoke.component.ts

import { Component } from '@angular/core';
import { InvokeService } from '../service/invoke.service';

@Component({
    selector: 'a03Invoke',
    template: `
        <div class="panel-heading">
            <h3>A03 Invoke</h3>
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
    `,
    // 사용할 서비스를 메모리에 로드, 주입은 생성자에서 받는다
    providers : [ InvokeService ]
})

export class A03Component {
    public cost: number = 10;
    public qty: number = 3;
    
    public inCurr: string = 'USD';
    public country: Array<string> = this.invoke.country;
    // public rate: {[key:string] : number} = this.invoke.rate;

    // 매개변수와 멤버변수의 역할을 동시에 할 수 있도록 접근제한자를 달아준다
    constructor(public invoke: InvokeService) { }

    public getTotal(outCurr: string): number {
        // return this.cost * this.qty * this.rate[outCurr] / this.rate[this.inCurr];
        return this.invoke.convertRate(outCurr, this.inCurr, this.cost * this.qty);
    }

    // public convertRate(outCurr: string, inCurr: string, amount: number): number {
    //     return amount * this.rate[outCurr] / this.rate[inCurr];
    // }

    public pay(): void {
        window.alert('Thank Tou!!!');
    }
}
