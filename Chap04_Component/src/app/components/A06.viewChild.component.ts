import { Component } from '@angular/core';

@Component({
    selector: 'a06One',
    template: `
        <div class="panel-body">
            <h4>A06 One Component</h4>

            Name: <input type="text" class="form-control">
            Age: <input type="text" class="form-control">
            ID: <input type="text" class="form-control">
        </div> 
    `
})
export class A06One {
    public name: string = 'Hong';
    public age: number = 20;
    public user: { id: number, name: string } = {
        id: 10,
        name: 'HongGilDong'
    }

    public greet(name: string): string {
        console.log(name);
        return name;
    }
}

@Component({
    selector: 'a06Component',
    template: `
        <div class="panel-heading">
            <h3>ViewChild</h3>
        </div>

        <a06One></a06One>
    `
})
export class A06Component {

}
