import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'a06One',
    template: `
        <div class="panel-body">
            <h4>A06 One Component</h4>

            Name: <input type="text" class="form-control" [(ngModel)]="name">
            Age: <input type="text" class="form-control" [(ngModel)]="age">
            ID: <input type="text" class="form-control" [(ngModel)]="user.id">
        </div> 
    `
})
export class A06One {
    public name: string = 'Hong';
    public age: number = 20;
    public user: { id: number, name: string } = {
        id: 10,
        name: 'HongGilDong'
    }

    public greet(name: string): string {
        console.log(name);
        return name;
    }
}

@Component({
    selector: 'a06Component',
    template: `
        <div class="panel-heading">
            <h3>ViewChild</h3>
        </div>

        <div class="panel-body">
            <h4>One 멤버 변수를 이용하여 바로 참조</h4>
            Name : {{one.name}}<br>
            Age : {{one.age}}<br>
            ID : {{one.user.id}}
        </div>

        <div class="panel-body">
            <h4>별도의 변수에 담아서 사용</h4>
            Name : {{name}}<br>
            Age : {{age}}<br>
            ID : {{user.id}}<br>
            ID : {{userID}}
        </div>

        <!-- one이라는 이름으로 객체화가 된다 -->
        <a06One #one></a06One>
    `
})
export class A06Component {
    @ViewChild('one') public one: A06One;

    // A06Compnent에서 독립적으로 사용하기 위해 변수 선언
    public name: string;
    public age: number;
    public user: any;

    public userID: number;

    constructor() {
        console.log(this.one); // 아직 생성 전
    }

    ngOnInit() {
        console.log(this.one);
        this.name = this.one.name;
        this.age = this.one.age;
        this.user = this.one.user;          // 주소값 대입
        this.userID = this.one.user.id;     // 실질 데이터를 대입
    }
}
