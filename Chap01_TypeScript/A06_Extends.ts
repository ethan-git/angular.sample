// A06_Extends.ts

import { Person } from './A05_Class';

let hungBu = new Person('Hung', 'Bu');
console.log(hungBu.toString());

class PersonOne {
    protected firstName: string;
    protected lastName: string;
    protected age: number = 0;
    private _add: string = '';

    constructor(firstName:string, lastName: string, age: number, add: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._add = add;
    }

    public getAge(): number {
        return this.age;
    }
    public setAge(age: number): void{
        this.age = age;
    }

    public get add(): string{
        return this._add;
    }
    // 매개변수가 선언된 변수와 같은 타입이어야 하고 리턴 타입을 기술하지 않음
    public set add(add: string){
        this._add = add;
    }

    public toString(): string {
        return `[Person] name=${this.firstName} ${this.lastName}`;
    }
}

// 상속. Java와 마찬가지로 단일 상속만 지원한다.
class Employee extends PersonOne {
    private bonus: number = 0.23;

    constructor(firstName: string, lastName: string, age: number, add: string, bonus: number){
        // 어떤 명령보다 먼저 있어야 한다.
        // 부모의 생성자에 전달할 매개변수 값이 없어도 super()는 호출되어야 한다.(생략 불가)
        super(firstName, lastName, age, add);
        this.bonus = bonus;
    }

    //method override
    public toString(): string{
        return `[Employee] ${this.firstName}, ${this.lastName} ${this.getAge()}, ${this.add}, ${this.bonus}`;
    }
}

let nolbu2: PersonOne = new PersonOne('Nol', 'Bu', 50, 'Seoul');
let hungbu2: PersonOne = new Employee('Hung', 'Bu', 30, 'Busan', 0.23);
console.log();
console.log(nolbu2.toString());
console.log(hungbu2.toString());

//let personAry: PersonOne[] = [nolbu2, hungbu2];
let personAry: Array<PersonOne> = [nolbu2, hungbu2];
