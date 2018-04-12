// A05.promise.service

import { Injectable } from '@angular/core';

@Injectable()
export class PromiseService {
    public mockData: Array<any> = [
        { name: 'Hong', kor: 100, eng: 100, math: 80 },
        { name: 'NolBu', kor: 100, eng: 100, math: 80 },
        { name: 'HungBu', kor: 100, eng: 100, math: 80 }
    ];

    constructor() { }

    // HTTP 서비스로 구현할 메소드
    public getData(value: boolean): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (value) {
                    console.log('Success');
                    resolve(this.mockData);
                } else {
                    console.log('Error');
                    reject({
                        errorCode: '500',
                        errorMsg: '파일을 찾을 수 없습니다.'
                    })
                }
            }, 2000);
        });
    }

}