import { Component } from '@angular/core';

@Component({
    selector: 'a06Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>ngIf / ngSwitch / ngFor</h3>
            </div>

            <div class="panel-body">
                <!-- 239 page -->
                <h4>ngIf</h4>
                <select [(ngModel)]="gender">
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                <!-- DOM 자체에서 아예 삭제 / 생성 됨 -->
                <span *ngIf="gender === 'male'">Male</span>
                <span *ngIf="gender === 'female'">Female</span>

                <!-- CSS로 숨김 처리됨 -->
                <span [hidden]="gender !== 'male'">Male</span>
                <span [hidden]="!(gender === 'female')">Female</span>
            </div>

            <div class="panel-body">
                <h4>ngSwitch</h4>
                <button (click)="grade='admin'">Admin</button>
                <button (click)="grade='member'">Member</button>
                <button (click)="grade='guest'">Guest</button>
                <br>
                <div [ngSwitch]="grade">
                    <span *ngSwitchCase="'admin'">Admin</span>
                    <span *ngSwitchCase="'member'">Member</span>
                    <span *ngSwitchCase="'guest'">Guest</span>
                    <span *ngSwitchDefault>회원등급을 선택해 주세요.</span>
                </div>
            </div>

            <div class="panel-body">
                <h4>ngFor</h4>
                <table class="table">
                    <tr>
                        <td>No</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>KOR</td>
                        <td>ENG</td>
                    </tr>
                    <!--
                    let i =0;
                    for(let item of students){ 
                        let i = index;
                    -->
                    <tr *ngFor="let item of students; let i = index;">
                        <td>{{i + 1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.age}}</td>
                        <td>{{item.kor}}</td>
                        <td>{{item.eng}}</td>
                    </tr>
                    <!-- 
                        i++;
                    } 
                    -->
                </table>

                <table class="table">
                    <tr>
                        <td>Index<td>
                        <td>Item<td>
                        <td>First<td>
                        <td>Middle<td>
                        <td>Last<td>
                        <td>Even<td>
                        <td>Odd<td>
                    </tr>

                    <tr *ngFor="let item of students; 
                        let i = index;
                        let f = first;
                        let m = middle;
                        let l = last;
                        let e = even;
                        let o = odd;
                    " [ngClass]="{'orange':e}">
                        <td>{{i}}<td>
                        <td>{{item.name}}<td>
                        <td>{{f}}<td>
                        <td>{{m}}<td>
                        <td>{{l}}<td>
                        <td>{{e}}<td>
                        <td>{{o}}<td>
                    </tr>
                </table>
            </div>


        </div>
    `,
    styles: [`
        .orange {background-color: orange};
    `]

})
export class A06Component{
    public gender:string = 'male';
    public grade: string= 'null';
    public students: Object[] = [
        {name: 'HongGilDong', age: 20, kor: 100, eng: 80},
        {name: 'NolBu', age: 50, kor: 90, eng: 90},
        {name: 'HungBu', age: 40, kor: 70, eng: 60},
    ]
    
}
