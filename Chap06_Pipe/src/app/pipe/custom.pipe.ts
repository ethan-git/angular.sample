// custom.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

// Custom Pipe는 View 역할을 하므로 module에 declarations에 등록될 필요가 있다.

@Pipe({
    name: 'upDown'
})

export class UpDownPipe implements PipeTransform {
    // 첫번째 매개변수는 변경할 대상 (data)

    // {{ 'abc' | upDown }}
    // 결국 매개변수 data => 'abc'가 대입된다.
    // transform가 실행되고 리턴된 결과 값을 받아서 결과값으로 화면을 갱신

    // {{ 'abc' | upDwon : 'up'}}와 같이 : 다음의 값이 두번째부터의 매개변수가 받는다
    transform(data: string, args: string): string {
        // data부터 체크해야 한다
        if (typeof data !== 'string') return data;

        if (args === 'up') {
            return data.toUpperCase();
        } else if (args === 'down') {
            return data.toUpperCase();
        } else {
            return data;
        }
    }
}

// Replace pip
@Pipe({ name: 'replacePipe' })
export class ReplacePipe implements PipeTransform {
    transform(data: string, oldValue: string = undefined, newValue: string = undefined): string {
        if (typeof data !== 'string') return data;
        if (oldValue === undefined || newValue === undefined) return data;

        return data.replace(oldValue, newValue);
    }
}

// 문자열 자르기
@Pipe({ name: 'abbrPipe' })
export class AbbrPipe implements PipeTransform {
    transform(data: string, size: number = 20, symbol: string = '...'): string {
        if (typeof data !== 'string') return data;

        // size = size || 20;
        // symbol = symbol || '...';

        if (data.length < size) {
            return data;
        } else {
            return data.substring(0, (size - symbol.length)) + symbol;
        }
    }
}