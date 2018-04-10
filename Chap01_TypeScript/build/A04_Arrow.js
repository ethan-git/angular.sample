"use strict";
// A04_Arrow.ts
var data1 = 'Hong';
var data2 = 'GilDong';
// 일반적인 함수
var getName = function () {
    return data1 + " " + data2;
};
// 위를 Arrow 함수로 만들면
// 1. function을 () => 로 변경.
//    매개변수는 ()안에 기존처럼 정의
// 2. 리턴값 딱 1문장만 있는 경우 {}를 생략하고 리턴 문장만 적는다.
//    이 경우도 return이 생략된 것으로 취급한다. return을 적으면 에러
// 3. 함수 구문이 1줄 이상이면 { }는 필수이고 1줄 이상의 구문에서 리턴이 있는 경우는
//    return 명령을 생략할 수 없다.
// let getName2 = () => return `${data1} ${data2}`;
var getName2 = function () { return data1 + " " + data2; };
console.log(getName() + ", " + getName2());
// 함수 내 기술문이 1구문 이상일 경우. {} 필수.
// 리턴문이 있는 경우는 return 생략 불가.
var getName3 = function () {
    var greet = 'Hello';
    return greet + " " + data1 + " " + data2;
};
// 매개변수
var getName4 = function (greet) {
    if (greet === void 0) { greet = 'Hello'; }
    console.log('getName4');
    return greet + " " + data1 + " " + data2;
};
console.log(getName3() + ", " + getName4('Hi~ '));
// Arrow 함수는 this의 참조가 다르다. (선언된 객체가 this)
var TodayClass = /** @class */ (function () {
    function TodayClass() {
        this.today = new Date();
    }
    TodayClass.prototype.getToday = function () {
        setTimeout(function () {
            // console.log(this, this.today);
        }, 1000);
    };
    return TodayClass;
}());
var NowClass = /** @class */ (function () {
    function NowClass() {
        this.now = new Date();
    }
    NowClass.prototype.getToday = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this, _this.now);
        }, 1000);
    };
    return NowClass;
}());
var today1 = new TodayClass();
var now1 = new NowClass();
today1.getToday();
now1.getToday();
//# sourceMappingURL=A04_Arrow.js.map