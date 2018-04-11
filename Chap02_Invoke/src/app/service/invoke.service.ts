import { Injectable } from "@angular/core";

// invoke.service.ts

@Injectable()       // DI가 가능하도록 한다
export class InvokeService {
    public country: Array<string> = ['USD', 'EUR', 'CNY'];
    public rate: {[key:string] : number} = {
        'USD' : 1.0,
        'EUR' : 1.37,
        'CNY' : 6.57
    }

    public convertRate(outCurr: string, inCurr: string, amount: number): number {
        return amount * this.rate[outCurr] / this.rate[inCurr];
    }
}