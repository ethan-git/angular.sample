import { Component } from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Name: {{person.name}}</h3>
            </div>
            
            <div class="panel-body">
                <div>일반적인 연산: 1 + 2 = {{1 + 2}} </div>
                <div>좋아하는 과일의 개수: {{person.fruit.length}} / {{cnt}}</div>
                <div>과일의 개수 * 100 : {{person.fruit.length * 100}} / {{cnt * 100}} </div>
                <div>Are you Hong? {{person.name === 'HongGilDong'}} </div>
                <div>Are you Hong? {{person.name === 'HongGilDong'?'홍길동':'누구인지 모름'}} </div>
                <div>과일 개수가 4개보다 많은가? {{person.fruit.length > 4}} / {{cnt > 4}} </div>
            </div>

            <button class="btn" (click)="setName()">Change</button>
	    </div>
    `
})
export class A02Component{

    public person: {name:string, fruit:string[]} = {
        name: 'HongGilDong',
        fruit: ['apple', 'banana', 'lemon']
    }

    public cnt: number = this.person.fruit.length;

    public setName():void {
        this.person.name = 'NolBu';
    }
}
