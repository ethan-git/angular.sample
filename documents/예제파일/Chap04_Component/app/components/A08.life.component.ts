import { Component } from '@angular/core';

@Component({
    selector: 'a08One',
    template: `
        <div class="panel-body">
            <!-- 312 page -->
            <h4>A08 One</h4>

        </div>
    `
})
export class A08One {
    private name: string = "A08 One"

}

@Component({
    selector: 'a08Component',
    template: `
        <div class="panel-body">
            <h3>A08 Component</h3>
            <input type="text" class="form-control" [(ngModel)]="name">
            <input type="number" class="form-control" [(ngModel)]="age">
            <input type="string" class="form-control" [(ngModel)]="user.address">
        </div>
        
    `
})
export class A08Component {
    public name: string = 'A08 Component';
    public age: number = 20;
    public user: any = {
        address: 'Seoul'
    }

    constructor(){
        console.log(`A08 Parent Constructor => ${this.age}`);
    }
    
}