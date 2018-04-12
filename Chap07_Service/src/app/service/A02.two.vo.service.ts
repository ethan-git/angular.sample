// A02.two.vo.service.ts

import { Injectable } from '@angular/core';

@Injectable()
export class TwoVOService {
    public name: string;
    public kor: number;
    public eng: number;
    public total: number;
    private _avg: number;

    public get avg(): number {
        return this._avg;
    }

    public set avg(avg: number) {
        this._avg = avg;
    }

    public toString(): string {
        return `[TwoVOService] name=${this.name}, kor=${this.kor}, eng=${this.eng}, total=${this.total}, avg=${this._avg}`;
    }
}