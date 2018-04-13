import { Component, Directive, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[a03OneDir]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A03OneDirective {

    @Output()
    public sendObjEvent: EventEmitter<any> = new EventEmitter();

    public obj: any = {
        message: 'A03 One Directive',
        user: {
            name: 'HongGilDong',
            age: 20
        },
        getInfo: function () {
            return this.user.name + ' - ' + this.user.age;
        }
    }

    public onClick(): void {
        console.log(`A03 One Directive`);
        this.sendObjEvent.emit(this.obj);
    }
}

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>3.Directive Output</h3>
            </div>

            <div class="panel panel-body">
                <div>
                    <button a03OneDir (sendObjEvent)="getData($event)">Click</button>
                </div>
                <br>
                
                <div>
                    Object: {{data | json}}<br>
                    Message: {{data?.message}}<br>
                    Info: {{data?.user.name}}<br>
                    Fn : {{data?.getInfo()}}
                </div>
            </div>
        </div>
    `
})
export class A03Component {

    public data: any;
    public getData(data: any): void{
        this.data = data;
    }
}
