import { Component, Input } from '@angular/core';

@Component({
    selector: 'a03One',
    template: `
        <div class="panel-body">
            <!-- 284 page -->
            <h4>Child Component</h4>

            <p>
                Normal: {{normal}}<br>
                Name: {{name}}<br>
                Object: {{tel}}<br>
                Array: {{ary[0]}} / {{ary[1]}}<br>

                Age: {{age + 100}}<br>
                Company: {{comp}}<br>
                Static: {{_static}}
            </p>
        </div>
    `,
    styles: [`
        div { border: 1px solid blue; padding:10px; margin:10px; width:70%; height:70%; }
    `],
    // inputs: ['normal', 'name', 'ary']
})
export class A03One { 
    @Input() normal: string;
    @Input() name: string;
    @Input('obj') tel: string;
    @Input() ary: string[];
    @Input('company') comp: string;
    @Input('st') _static: string;

    private _age: number;
    @Input()
    public set age(value: any){
        console.log(value, typeof value);
        if(typeof value === 'string'){
            this._age = Number(value);
        }else{
            this._age = value;
        }
    }
    public get age(): any{
        return this._age;
    }
}

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel-body">
            <h3>Parent Component</h3>
            <div>
                <div class="col-md-2">
                    <label>Name</label>
                    <input type="text" class="form-control" [(ngModel)]="name">
                </div>
                <div class="col-md-2">
                    <label>Obj</label>
                    <input type="text" class="form-control" [(ngModel)]="obj.tel">
                </div>
                <div class="col-md-2">
                    <label>Ary</label>
                    <input type="text" class="form-control" [(ngModel)]="ary[0]">
                </div>
                <div class="col-md-2">
                    <label>Age</label>
                    <input type="text" class="form-control" [(ngModel)]="age">
                </div>
                <div class="col-md-2">
                    <label>Company</label>
                    <input type="text" class="form-control" [(ngModel)]="company">
                </div>
                <div class="col-md-2">
                    <label>Static</label>
                    <input type="text" class="form-control" [(ngModel)]="st">
                </div>
            </div>
            <!-- 값은 속성으로 전달한다 
                []로 안싸면 일반 텍스트로 전달 (하위 컴퍼넌트에서 받지 않아도 에러 아님)
                []로 감싸면 컨트럴러의 변수로 전달 (하위 컴퍼넌트에서 반드시 받아야 함)
            -->
            <a03One normal="Normal Text" 
                [name]="name" 
                [obj]="obj.tel"
                [ary]="ary"
                [age]="age"
                [company]="company"
                [st]="st"
            >
            </a03One>
        </div>
    `,
    styles: [`
        .box { border: 1px solid orange; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})
export class A03Component {
    public name: string = 'HongGilDong';
    public obj: {tel: string, address: string} = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: string[] = ['One','Two','Three'];
    public age: number = 20;
    public company: string = 'Multi';

    // Class 멤버변수
    public static _static: string = 'Static Property';

    // 직접 호출이 안되므로 Getter / Setter로 참조 [ 프로퍼티처럼 사용 ]
    public set st(st: string){
        A03Component._static = st;
    }

    public get st(): string{
        return A03Component._static;
    }
}
