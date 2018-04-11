import { Component }      from '@angular/core';

@Component({
    selector: 'a05Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <!-- 243 page -->
                <h3>양방향 바인딩</h3>
            </div>
            
            <div class="panel-body">
                <!--
                    [(ngModel)]을 사용하기 위해서는 modules.ts에 먼저 FormsModule이 올라와야 함
                    imports:      [ BrowserModule, FormsModule ],
                -->
                <input class="form-control" [(ngModel)]="name">
                <input class="form-control" [(ngModel)]="name">
                <input class="form-control" [value]="name" (input)="onChange($event)">
                <br>

                <!-- option의 value 값이 ngModel의 변수에 대입됨 -->
                <select class="form-control" [(ngModel)]="name">
                    <option *ngFor="let item of students">{{item.name}}</option>
                </select>

                <br>
                
                <span *ngFor="let item of students">
                    <label><input type="radio" [value]="item.name" [(ngModel)]="name">{{item.name}} &nbsp;</label>
                </span>
            </div>
        </div>
    `
})
export class A05Component{
    public name: string = 'HongGilDong';
    public students: {name: string, age: number, address: string}[] = [
        {name: 'HongGilDong', age: 20, address: 'Seoul'},
        {name: 'IlJimea', age: 25, address: 'Busan'},
        {name: 'ImGGekJung', age: 30, address: 'InChen'},
        {name: 'NolBu', age: 50, address: 'Seoul'},
        {name: 'HungBu', age: 40, address: 'Seoul'},
    ]

    public onChange(evt: Event): void{
        // as 연산자로 타입체크 가능
        let elem: HTMLInputElement = evt.target as HTMLInputElement;
        this.name = elem.value;
    }
}