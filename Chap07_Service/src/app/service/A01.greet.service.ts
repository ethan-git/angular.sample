// A01.greet.service.ts

import { Injectable } from '@angular/core';

// 의존성 주입이 가능하도록 처리
// 없으면 new GreetService() 형태로 사용
@Injectable()
export class GreetService {
    public greet: string = 'Hello';

    constructor() {
        console.log('Greet Service 생성');
    }

    public getName(name: string): string {
        return this.greet + name;
    }
}