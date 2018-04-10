"use strict";
// A08_interface.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 인터페이스의 모든 메서드를 정의하지 않은 클래스는 추상클래스로 선언해야 한다.
// 자바와 다른점은 인터페이스의 모든 메서드는 일단 기술해야 함(기술하고 추상 메서드로 선언)
var AJumsu = /** @class */ (function () {
    // 생성자에 접근제한자가 붙은 매개변수를 선언하면
    // 매개변수 역할과 멤버변수 역할을 동시에 수행한다
    // 즉 매개변수와 동일한 멤버변수를 자동으로 작성해 준다(멤버변수 선언)
    // public kor: number;      // 생성자에 의해 만들어 짐
    function AJumsu(name, kor, eng) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.total = 0;
        this.avg = 0;
        // this.name = name;    // 이것까지 알아서 자동으로 해 줌
    }
    // 접근제한자가 생략되면 기본 접근제한자인 public이 생략된 형태
    AJumsu.prototype.getTotal = function () {
        this.total = this.kor + this.eng;
        return this.total;
    };
    AJumsu.prototype.getAvg = function () {
        this.avg = this.getTotal() / 2;
        return this.avg;
    };
    return AJumsu;
}());
var JumsuTwo = /** @class */ (function (_super) {
    __extends(JumsuTwo, _super);
    function JumsuTwo(name, kor, eng) {
        return _super.call(this, name, kor, eng) || this;
    }
    JumsuTwo.prototype.display = function () {
        console.log(this.name + "\uB2D8\uC758 \uCD1D\uC810\uC740 " + this.total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this.avg + "\uC785\uB2C8\uB2E4.");
    };
    return JumsuTwo;
}(AJumsu));
//추상클래스는 객체생성 안됨
// let hong = new AJumsu('홍길동', 100, 90);
var nulBu8 = new JumsuTwo('NulBu', 100, 90);
var hungBu8 = new JumsuTwo('HungBu', 90, 90);
var jimea = new JumsuTwo('jimea', 80, 90);
var jumsuAry = [nulBu8, hungBu8, jimea];
for (var _i = 0, jumsuAry_1 = jumsuAry; _i < jumsuAry_1.length; _i++) {
    var i = jumsuAry_1[_i];
    i.getTotal();
    i.getAvg();
    i.display();
}
//# sourceMappingURL=A08_interface.js.map