import { Component } from '@angular/core';

@Component({
    selector: 'a04One',
    template: `
        <div class="panel-body">
            <!-- 288 page -->
            Name: <br>
            <button class="btn btn-primary">Send Name</button>
            <button class="btn btn-primary">Send Object</button>
        </div>
    `
})
export class A04One {
    public name: string = 'HongGilDong';
    public obj: any = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: string[] = ['One','Two','Three'];
    public age: number = 20;
    public company: string = 'Multi';

    public static _static: string = 'Static Property';

    public set st(st: string){
        A04One._static = st;
    }

    public get st(): string{
        return A04One._static;
    }
}


@Component({
    selector: 'a04Component',
    template: `
        <div class="panel-body">
            <h3>EventEmitter</h3>
            
            <div>

            </div>

            <a04One></a04One>
        </div>
    `
})
export class A04Component {

}
