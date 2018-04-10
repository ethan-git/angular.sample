// A07_Interface.ts

// Interface로 객체의 커스텀 타입을 정의할 수 있다.
interface objType {
    name : string;
    age: number;
    add: string;
    ary: string[];
    fn: Function;
    // num: number;
}

let obj: objType = {
    name: 'HongGilDong',
    age: 20,
    add: 'Seoul',
    ary: ['one', 'two', 'three'],
    fn: function(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

console.log(obj.name);

class ObjClass {
    private obj : objType;

    constructor(obj: objType){
        this.obj = obj;
    }

    public toString(): string {
        return `[ObjClass] Name: ${this.obj.name}, Age: ${this.obj.age}`;
    }
}

let objCls = new ObjClass(obj);
console.log(objCls.toString());

let keyValue: { [key:string] : number} = {
    'one': 10,
    'two': 20,
    'three': 30,
    '30': 40
};
console.log(keyValue['two']);