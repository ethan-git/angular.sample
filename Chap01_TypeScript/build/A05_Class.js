"use strict";
// A05_Class.ts
Object.defineProperty(exports, "__esModule", { value: true });
// 기존 자바스크립트 클래스
// function MyClass(name: string) {
//     this.name = name;
//     this.getName = function(greet: string){
//         return greet + ' ' + this.name;
//     }
// }
// let mc = new MyClass('NolBu');
// console.log(mc.getName('Hi~ '));
// TypeScript Class [Java와 거의 동일]
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.age = 0;
        this._add = '';
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Getter, Setter Method (Java 방식)
    // 타입스크립트에서는 이렇게 정의하지 않는다
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Object.defineProperty(Person.prototype, "add", {
        // TypeScript 방식의 Getter, Setter Method
        // 사용하는 쪽에서는 프로퍼티의 방식으로 사용한다.
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
    Person.prototype.toString = function () {
        return "[Person] name=" + this.firstName + " " + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
var hong1 = new Person('Hong', 'GilDong');
// hong1.firstName = 'Kim';     // private 접근제한자라 접근 불가
console.log(hong1.getAge()); // method로 접근
console.log(hong1.add); // Getter로 접근, 프로퍼티 방식으로 호출
hong1.add = 'Seoul'; // Setter로 접근, 프로퍼티 방식으로 호출
console.log(hong1.add);
console.log(hong1.toString());
var nolbu1 = new Person('Nol', 'Bu');
console.log(nolbu1.toString());
//# sourceMappingURL=A05_Class.js.map