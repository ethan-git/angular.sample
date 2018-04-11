import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'a05Two',
    template: `
        <div class="panel-body">
            Name: <br>
        </div>
        <div>
            Name: {{name}}<br>
            Object: {{data?.name}}<br>
            Object obj: {{data?.obj.tel}} // {{data?.obj.address}}<br>
            Object Ary: {{data?.ary[0]}} // {{data?.ary[1]}}<br>
        </div>
    `
})
export class A05TwoComponent {
    @Input() name: string;
    @Input() data: any;

    constructor() { }
}

@Component({
    selector: 'a05One',
    template: `
        <div class="panel-body">
            <!-- 288 page -->
            Name: <br>
        </div>
    `
})

export class A05One {
    // 1. 상위 컴퍼넌트에 데이터 전달 - Envet 방식
    @Output()
    public sendNameEvent: EventEmitter<string> = new EventEmitter();

    @Output()
    public sendObjEvent: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {
        this.onSendName();
        this.onSendObject();
    }

    public onSendName(): void {
        // 2. 내가 만든 위 이벤트 객체에 값을 넣어 이벤트 발생
        this.sendNameEvent.emit(this.name);
    }

    public onSendObject(): void {
        let sendData: {
            name: string, obj: { tel: string, address: string }, age: number
            ary: string[]
        } = {
                name: this.name,
                obj: this.obj,
                age: this.age,
                ary: this.ary
            }
        this.sendObjEvent.emit(sendData);
    }

    public name: string = 'HongGilDong';
    public obj: any = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: string[] = ['One', 'Two', 'Three'];
    public age: number = 20;
    public company: string = 'Multi';

    public static _static: string = 'Static Property';

    public set st(st: string) {
        A05One._static = st;
    }

    public get st(): string {
        return A05One._static;
    }
}


@Component({
    selector: 'a05Component',
    template: `
        <div class="panel-body">
            <h3>EventEmitter</h3>
            
            <div>
                Name: {{name}}<br>
                Object: {{data?.name}}<br>
                Object obj: {{data?.obj.tel}} // {{data?.obj.address}}<br>
                Object Ary: {{data?.ary[0]}} // {{data?.ary[1]}}<br>
            </div>

            <a05One (sendNameEvent)="getName($event)" (sendObjEvent)="getObject($event)"></a05One>
            <!-- one이 던져준 데이터를 다시 two에게 전달
                속성으로 전달했으므로 two는 반드시 @Input으로 받아야 함
            -->
            <a05Two [name]="name" [data]="data"></a05Two>
        </div>
    `
})
export class A05Component {
    public name: string;
    public data: any;

    // 이벤트에 전달된 값을 캐스팅까지 해서 전달 해 줌
    public getName(evt: string): void {
        console.log(evt);
        this.name = evt;
    }

    public getObject(evt: any): void {
        this.data = evt;
    }
}
