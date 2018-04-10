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
                <select>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                <span>Male</span>
                <span>Female</span>
            </div>

            <div class="panel-body">
                <h4>ngSwitch</h4>
                <button>Admin</button>
                <button>Member</button>
                <button>Guest</button>
                <br>
                <div>
                    <span>Admin</span>
                    <span>Member</span>
                    <span>Guest</span>
                    <span>회원등급을 선택해 주세요.</span>
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
                    
                </table>
            </div>


        </div>
    `
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
