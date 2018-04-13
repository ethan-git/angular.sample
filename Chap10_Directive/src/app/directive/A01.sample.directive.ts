import { Directive } from "@angular/core";

// A01.sample.directive.ts

// DOM을 재 구성
// 공통적인 이벤트 할당

@Directive({
    selector: 'a01OneDir',
    host: {
        // 이벤트명: 이벤트 실행함수명
        '(click)': 'onClick()'
    }
})

export class A01OneDirective {
    public onClick(): void {
        console.log('A01 One Directive Clicked');
    }
}

@Directive({
    selector: '[a01TwoDir]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A01TwoDirective {
        public onClick(): void {
            console.log('A01 Two Directive Clicked');
        }
}

@Directive({
    selector: '[a01ThreeDir], [three]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A01ThreeDirective {
        public onClick(): void {
            console.log('A01 Three Directive Clicked');
        }
}