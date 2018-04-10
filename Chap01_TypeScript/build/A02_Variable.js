"use strict";
// A02_Variable.ts
// TypeScript는 모든 변수에는 타입이 할당된다.
// 타입을 기술하지 않은 변수는 값에 의해 타입이 결정된다.
var firstName = 'Hong';
var lastName = 'GilDong';
// any 타입은 자바스크립트처럼 모든 타입을 다 허용한다.
// 가능하면 사용하지 말자
var age = 10;
age = 'Hong';
age = new Date();
// 변수가 타입을 기술하지 않고 초기화도 안하면 any 타입으로
var noType;
noType = 20;
noType = 'abc';
noType = new Date();
// Union 형태도 지원
var un = 10;
un = '문자열';
// un = true;
// un = new Date();
var ok = true;
// ok = 0;
// 객체 타입
var today = new Date();
// ES2015부터 `(틸트)를 지원함 - 사용은 자바의 EL 방식
console.log('이름: ' + firstName + ' ' + lastName + ' ' + age);
console.log("noType: " + noType + ", un: " + un + ", ok: " + ok + ", today: " + today);
// 배열
var ary1 = [1, 2, 3, 4, 5];
var ary2 = ['one', 'two', 'three'];
// let의 scope
// let firstName: string = '재 선언은 에러';
// let 변수는 자신이 속한 { } 내부에서만 유효하다.
if (true) {
    var firstName_1 = 'NolBu';
    var su = 10;
}
console.log("firstName: " + firstName);
// console.log(`If의 su: ${su}`);
for (var i = 0; i < ary1.length; i++) {
    console.log(i + " : " + ary1[i]);
}
//console.log(i);   //for {} 내부에서만 사용 가능
// for ~ in => index 기반
for (var i in ary2) {
    console.log(i + " : " + ary2[i]);
}
// for ~ of[es2015] => value 기반
for (var _i = 0, ary2_1 = ary2; _i < ary2_1.length; _i++) {
    var i = ary2_1[_i];
    console.log("" + i);
}
// null 타입 변수, undefined 변수 타입에는 값 대입 안됨
var nullType;
// nullType = 10;
// nullType = undefined;
nullType = null;
var unType;
// unType = 10;
// unType = null;
unType = undefined;
//# sourceMappingURL=A02_Variable.js.map