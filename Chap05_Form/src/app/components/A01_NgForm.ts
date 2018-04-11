import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel-heading">
            <h3>Template Base Form</h3>
        </div>
        <div class="panel-body">
            Form Value: {{myForm.value | json}}
        </div>
        <div class="panel-body">
            <!-- ngSubmit event는 submit 버튼이 클릭되면 발생되는 이벤트를 잡아 실행 -->
            <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">
                <div>
                    <label>UserName: {{firstName}} {{lName.value}}</label>
                    <!--
                        form 태그 안쪽에 있는 경우 [(ngModel)]을 사용할 경우 name 속성이 반드시 있어야 한다
                    -->
                    <input type="text" class="form-control" name="fName" [(ngModel)]="firstName">
                    <input type="text" class="form-control" name="lName" ngModel #lName="ngModel">
                </div>
                <br>

                <div>
                    <label>SSN:</label>
                    <input type="text" class="form-control" name="ssn" #ssn (input)="show(ssn.value)">
                </div>
                <br>

                <div>
                    <label>Password:</label>
                    <input type="text" class="form-control" name="pw" ngModel>
                </div>
                <br>

                <div>
                    <label>Confirm password : </label>
                    <input type="password" class="form-control" name="repw" ngModel>
                </div>
                <br>

                <div>
                    <label>Department : </label>
                    <select class="form-control" name="dept" ngModel>
                        <option *ngFor="let item of ary">{{item}}</option>
                    </select>
                </div>
                <br>
                
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    `
})
export class A01Component {
    public ary: string[] = ['Salary', 'Department']
    public dept: string = 'Salary';
    public firstName: string = 'HongGilDong';

    public show(data: string): void {
        console.log(data);
    }

    public onSubmit(data: any): void {
        console.log(data);

        // http 서비스를 이용한 DB 입력 로직
    }
}
