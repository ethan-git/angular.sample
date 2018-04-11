import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel-heading">
            <h3>Model Base Form</h3>
        </div>

        <div class="panel-body">
            Form Value: {{fg.value | json}}<br>
            Name: {{fg.get('name').get('0').value}} {{fg.get('name').get('1').value}}<br>
            SSN: {{fg.get('ssn').value}}
        </div>

        <div class="panel-body">
            <!-- formGroup, formControlName은 ReactiveFormsModule Module이 관리
                FormsModule과 별도로 module에 등록해야 한다
            -->
            <form [formGroup]="fg" (ngSubmit)="onSubmit(fg.value)">
                <div formArrayName="name">
                    <label>UserName:</label>
                    <input type="text" class="form-control" formControlName="0">
                    <input type="text" class="form-control" formControlName="1">
                </div>
                <br>

                <div>
                    <label>SSN:</label>
                    <input type="text" class="form-control" formControlName="ssn">
                </div>
                <br>

                <div>
                    <label>Password:</label>
                    <input type="text" class="form-control" formControlName="pw">
                </div>
                <br>

                <div>
                    <label>Confirm password : </label>
                    <input type="password" class="form-control" formControlName="repw">
                </div>
                <br>

                <div>
                    <label>Department : </label>
                    <select class="form-control" formControlName="dept">
                        <option *ngFor="let item of ary">{{item}}</option>
                    </select>
                </div>
                <br>
                
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    `
})
export class A03Component {
    public ary: string[] = ['Salary', 'Department']
    public dept: string = 'Salary';
    public firstName: string = 'HongGilDong';

    // Controller에서 Form 요소를 제어
    public fg: FormGroup;                   // form에 매칭

    ngOnInit() {
        // 세팅은 여기서
        this.fg = new FormGroup({
            name: new FormArray([
                new FormControl(''),
                new FormControl(''),
            ]),
            ssn: new FormControl(''),       // Form field와 매칭되서 사용됨
            pw: new FormControl(''),
            repw: new FormControl(''),
            dept: new FormControl('')
        });
    }

    public getSSN(): string {
        return this.fg.get('ssn').value;
    }
    public onSubmit(data: any): void {
        console.log(data);
    }
}
