// A02_Variable.ts

// TypeScript는 모든 변수에는 타입이 할당된다.
// 타입을 기술하지 않은 변수는 값에 의해 타입이 결정된다.
let firstName = 'Hong';

let lastName: string = 'GilDong';

// any 타입은 자바스크립트처럼 모든 타입을 다 허용한다.
// 가능하면 사용하지 말자
let age: any = 10;
age = 'Hong';
age = new Date();

// 변수가 타입을 기술하지 않고 초기화도 안하면 any 타입으로
let noType;
noType = 20;
noType = 'abc';
noType = new Date();

// Union 형태도 지원
let un: string | number = 10;
un = '문자열';
// un = true;
// un = new Date();

let ok: boolean = true;
// ok = 0;

// 객체 타입
let today: Date = new Date();

// ES2015부터 `(틸트)를 지원함 - 사용은 자바의 EL 방식
console.log('이름: '+firstName+' '+lastName+' '+age);
console.log(`noType: ${noType}, un: ${un}, ok: ${ok}, today: ${today}`);

// 배열
let ary1: number[] = [1,2,3,4,5];
let ary2: Array<string> = ['one','two','three'];

// let의 scope
// let firstName: string = '재 선언은 에러';

// let 변수는 자신이 속한 { } 내부에서만 유효하다.
if(true){
    let firstName: string = 'NolBu';
    let su: number = 10;
}
console.log(`firstName: ${firstName}`);
// console.log(`If의 su: ${su}`);

for (let i = 0; i < ary1.length; i++){
    console.log(`${i} : ${ary1[i]}`);
}
//console.log(i);   //for {} 내부에서만 사용 가능

// for ~ in => index 기반
for (let i in ary2) {
    console.log(`${i} : ${ary2[i]}`);
}

// for ~ of[es2015] => value 기반
for (let i of ary2) {
    console.log(`${i}`);
}

// null 타입 변수, undefined 변수 타입에는 값 대입 안됨
let nullType: null;
// nullType = 10;
// nullType = undefined;
nullType = null;

let unType: undefined;
// unType = 10;
// unType = null;
unType = undefined;
