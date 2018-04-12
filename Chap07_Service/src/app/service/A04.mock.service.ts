// A04.mock.service.ts

import { Injectable } from '@angular/core';

@Injectable()
export class MockService {
    public mockData: Array<any> = [
        {name: 'Hong', kor:100, eng:100, math:80},
        {name: 'NolBu', kor:100, eng:100, math:80},
        {name: 'HungBu', kor:100, eng:100, math:80}
    ];

    constructor() { }

    // HTTP 서비스로 구현할 메소드
    public getData(): Array<any>{
        return this.mockData;
    }

}