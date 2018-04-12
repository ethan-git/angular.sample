// list.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'limitTo' })
export class LimitToPipe implements PipeTransform {
    transform(data: Array<any>, limit: number = data.length): Array<any> {
        /* 
        {
            {id: 1, name: 'Hong', kor: 90, eng: 71},
            {id: 2, name: 'Jimea', kor: 80, eng: 72},
            {id: 3, name: 'NolBu', kor: 70, eng: 73},
            {id: 4, name: 'HungBu', kor: 60, eng: 74},
            {id: 5, name: 'Ih', kor: 50, eng: 85}
        }
         */
        // 걸러질 데이터를 담을 배열 객체를 생성
        let result: Array<any> = [];

        for (let i = 0; i < limit; i++) {
            result.push(data[i]);
        }
        return result;
    }
}


@Pipe({ name: 'countPipe' })
export class CountPipe implements PipeTransform {
    transform(data: Array<any>): Array<number> {

        let result: Array<number> = [];
        for (let item in data) {
            result.push(Number(item) + 1);
        }
        return result;
    }
}

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
    transform(data: Array<any>, field: string, keyword: string = '', ignore: boolean = true): Array<any> {

        let result: Array<any> = [];

        let keys: Array<string>;
        if (!field) {
            // {id: 1, name: 'Hong', kor: 90, eng: 71},
            // ...
            keys = Object.keys(data[0]);    // [id, name, kor, eng]
            field = keys[0]
        }

        if (ignore) {
            data.forEach((item, index) => {
                let str: string = item[field].toString();
                if (str.toUpperCase().indexOf(keyword.toString().toUpperCase()) != -1) {
                    result.push(item);
                }
            });
        } else {
            data.forEach((item, index) => {
                let str: string = item[field].toString();
                if (str.indexOf(keyword.toString()) != -1) {
                    result.push(item);
                }
            });
        }

        return result;
    }
}

@Pipe({name: 'fieldNamePipe'})
export class FieldNamePipe implements PipeTransform {
    transform(data: Array<any>): Array<string> {
        let keys: Array<string> = Object.keys(data[0]);
        return keys;
    }
}