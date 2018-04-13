import { Component, Directive, Input } from '@angular/core';


@Directive({
    selector: '[a02OneDir]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A02OneDirective {

    @Input('a02OneDir') name: string;
    @Input() age: number;
    @Input() info: any;

    public onClick(): void {
        console.log(`A02 One Dir ${this.name} ${this.age} ${this.info.tel}`);
    }
}

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>2.Directive Input</h3>
            </div>

            <div class="panel panel-body">
                <div a02OneDir="name" [age]="age" [info]="info">ONE</div>

                <!-- directive가 기술되어 있으면 나머지 옵션도 지시자에게 전달 -->
                <div [a02OneDir]="name" [age]="age" [info]="info">ONE</div>
            </div>
            
        </div>
    `
})
export class A02Component {
    public name: string = 'HongGilDong';
    public age: number = 20;
    public info: { address: string, tel: string } = {
        address: 'Seoul',
        tel: '010-1111-2222'
    }
}