"use strict";
// A07_Interface.ts
var obj = {
    name: 'HongGilDong',
    age: 20,
    add: 'Seoul',
    ary: ['one', 'two', 'three'],
    fn: function () {
        return "Name: " + this.name + ", Age: " + this.age;
    }
};
console.log(obj.name);
var ObjClass = /** @class */ (function () {
    function ObjClass(obj) {
        this.obj = obj;
    }
    ObjClass.prototype.toString = function () {
        return "[ObjClass] Name: " + this.obj.name + ", Age: " + this.obj.age;
    };
    return ObjClass;
}());
var objCls = new ObjClass(obj);
console.log(objCls.toString());
var keyValue = {
    'one': 10,
    'two': 20,
    'three': 30,
    '30': 40
};
console.log(keyValue['two']);
//# sourceMappingURL=A07_Interface.js.map