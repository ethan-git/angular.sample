// A04_Arrow.ts

let data1 = 'Hong';
let data2 = 'GilDong';

// 일반적인 함수
let getName = function(): string{
    return `${data1} ${data2}`;
}

// 위를 Arrow 함수로 만들면
// 1. function을 () => 로 변경.
//    매개변수는 ()안에 기존처럼 정의
// 2. 리턴값 딱 1문장만 있는 경우 {}를 생략하고 리턴 문장만 적는다.
//    이 경우도 return이 생략된 것으로 취급한다. return을 적으면 에러
// 3. 함수 구문이 1줄 이상이면 { }는 필수이고 1줄 이상의 구문에서 리턴이 있는 경우는
//    return 명령을 생략할 수 없다.

// let getName2 = () => return `${data1} ${data2}`;
let getName2 = () => `${data1} ${data2}`;

console.log(`${getName()}, ${getName2()}`);

// 함수 내 기술문이 1구문 이상일 경우. {} 필수.
// 리턴문이 있는 경우는 return 생략 불가.
let getName3 = () => {
    let greet : string = 'Hello';
    return `${greet} ${data1} ${data2}`;
}

// 매개변수
let getName4 = (greet: string = 'Hello'): string => {
    console.log('getName4');
    return `${greet} ${data1} ${data2}`;
}

console.log(`${getName3()}, ${getName4('Hi~ ')}`);

// Arrow 함수는 this의 참조가 다르다. (선언된 객체가 this)
class TodayClass {
    private today: Date = new Date();

    public getToday(){
        setTimeout(function(){
            // console.log(this, this.today);
        }, 1000);
    }
}

class NowClass {
    private now: Date = new Date();

    public getToday(){
        setTimeout(() => {
            console.log(this, this.now);
        }, 1000);
    }
}

let today1 = new TodayClass();
let now1 = new NowClass();

today1.getToday();
now1.getToday();