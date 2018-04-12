
import { Component } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'a01Component',
    template: `
    
    `,
})
export class A01Component  { 

    public promiseFn(value: string): Promise<string>{
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if(value){
                    resolve(`입력하신 값은 ${value}입니다.`);
                }else{
                    reject('입력하신 값이 없습니다.')
                }
            }, 2000)
        });
    };

    ngOnInit() {

        // 1. setTimeout 처리 방법
        setTimeout( () => {
            console.log('3초 후에 출력');
        }, 3000);


        // 2. 일반적인 Promise 처리
        this.promiseFn('HongGilDong')
            .then(
                (data) => console.log(data),
                (error) => console.log(error)
            )
            .catch(
                error => console.log(error)
            )

        // 3. Promise의 재 호출
        this.promiseFn('NolBu')
            // 첫번째 promise 처리
            .then(
                (data: string) => {
                    console.log('첫번째 호출 => ' + data);
                    return this.promiseFn('HungBu');
                },
                (error: string) => {
                    console.log('첫번째 에러 => ' + error);
                    // 이 에러 구문이 없어도 아래 then문은 순차적으로 실행된다
                    return this.promiseFn('HungBu');
                }
            )
            // 두번째 promise 처리
            .then(
                (data: string) => {
                    console.log('두번째 호출 => ' + data);
                    return this.promiseFn('HungBu');
                },
                (error: string) => {
                    console.log('두번째 에러 => ' + error);
                }
            )
            .catch(
                error => console.log(error)
            )

    };
}