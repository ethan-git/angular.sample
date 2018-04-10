"use strict";
// A06_Extends.ts
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
Object.defineProperty(exports, "__esModule", { value: true });
var A05_Class_1 = require("./A05_Class");
var hungBu = new A05_Class_1.Person('Hung', 'Bu');
console.log(hungBu.toString());
var PersonOne = /** @class */ (function () {
    function PersonOne(firstName, lastName, age, add) {
        this.age = 0;
        this._add = '';
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._add = add;
    }
    PersonOne.prototype.getAge = function () {
        return this.age;
    };
    PersonOne.prototype.setAge = function (age) {
        this.age = age;
    };
    Object.defineProperty(PersonOne.prototype, "add", {
        get: function () {
            return this._add;
        },
        // 매개변수가 선언된 변수와 같은 타입이어야 하고 리턴 타입을 기술하지 않음
        set: function (add) {
            this._add = add;
        },
        enumerable: true,
        configurable: true
    });
    PersonOne.prototype.toString = function () {
        return "[Person] name=" + this.firstName + " " + this.lastName;
    };
    return PersonOne;
}());
// 상속. Java와 마찬가지로 단일 상속만 지원한다.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, add, bonus) {
        var _this = 
        // 어떤 명령보다 먼저 있어야 한다.
        // 부모의 생성자에 전달할 매개변수 값이 없어도 super()는 호출되어야 한다.(생략 불가)
        _super.call(this, firstName, lastName, age, add) || this;
        _this.bonus = 0.23;
        _this.bonus = bonus;
        return _this;
    }
    //method override
    Employee.prototype.toString = function () {
        return "[Employee] " + this.firstName + ", " + this.lastName + " " + this.getAge() + ", " + this.add + ", " + this.bonus;
    };
    return Employee;
}(PersonOne));
var nolbu2 = new PersonOne('Nol', 'Bu', 50, 'Seoul');
var hungbu2 = new Employee('Hung', 'Bu', 30, 'Busan', 0.23);
console.log();
console.log(nolbu2.toString());
console.log(hungbu2.toString());
//let personAry: PersonOne[] = [nolbu2, hungbu2];
var personAry = [nolbu2, hungbu2];
//# sourceMappingURL=A06_Extends.js.map