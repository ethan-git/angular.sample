import { Component, Input } from '@angular/core';

@Component({
    selector: 'a02One',
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

            <!-- <grand nor="grand" [name]="name"></grand> -->
        </div>
    `,
    styles: [`
        div { border: 1px solid blue; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})
export class A02One { 
    // 상위 컴퍼넌트에서 전달한 속성 값을 받아 처리
    // @Input('전달한 속성명') 사용할변수명: 타입 [= 기본값]
    // 전달할 속성명과 사용할 변수명이 같으면 ()의 '전달한 속성명'은 생략 가능
    // 미리 준비한 @Input은 그 값을 받지 않아도 에러 아님(준비만 해 놓은 상태)
    @Input() normal: string;
    @Input() name: string;
    @Input('obj') tel: string;
    @Input() ary: string[];
    @Input('company') comp: string;
    @Input('st') _static: string;

    // @Input() age: number; // form 요소에서 넘어오면 문자로 넘어옴
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
    selector: 'a02Component',
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
            <a02One normal="Normal Text" 
                [name]="name" 
                [obj]="obj.tel"
                [ary]="ary"
                [age]="age"
                [company]="company"
                [st]="st"
            >
            </a02One>
        </div>
    `,
    styles: [`
        .box { border: 1px solid orange; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})
export class A02Component {
    public name: string = 'HongGilDong';
    public obj: any = {
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
        A02Component._static = st;
    }

    public get st(): string{
        return A02Component._static;
    }
}
