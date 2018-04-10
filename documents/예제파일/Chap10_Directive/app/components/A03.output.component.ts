import { Component, Directive } from '@angular/core';

@Directive({
    selector: '[a03OneDir]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A03OneDirective {

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
}

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>Directive Output</h3>
            </div>

            <div class="panel panel-body">
                <div>
                    <button>Click</button>
                </div>
                <br>
                
                <div>
                    Object: <br>
                    Message: <br>
                    Info: 
                </div>
            </div>
        </div>
    `
})
export class A03Component {

    public obj: any;

}
