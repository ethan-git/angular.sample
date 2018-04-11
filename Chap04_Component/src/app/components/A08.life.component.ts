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
    private age: number = 100;

    constructor(){
        console.log(`A08 One Constructor => ${this.age}`);
    }
    
    ngOnInit() {
        console.log(`A08 One ngOnInit => ${this.age}`);
    }

    ngOnChanges() {
        console.log(`A08 One ngOnChanges => ${this.age}`);
    }

    ngAfterContentInit() {
        console.log(`A08 One ngAfterContentInit => ${this.age}`);
    }

    ngAfterContentChecked() {
        console.log(`A08 One ngAfterContentChecked => ${this.age}`);
    }

    ngAfterViewInit() {
        console.log(`A08 One ngAfterViewInit => ${this.age}`);
    }

    ngAfterViewChecked() {
        console.log(`A08 One ngAfterViewChecked => ${this.age}`);
    }
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
        
        <a08One></a08One>
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
    
    ngOnInit() {
        console.log(`A08 Parent ngOnInit => ${this.age}`);
    }

    ngOnChanges() {
        console.log(`A08 Parent ngOnChanges => ${this.age}`);
    }

    ngAfterContentInit() {
        console.log(`A08 Parent ngAfterContentInit => ${this.age}`);
    }

    ngAfterContentChecked() {
        console.log(`A08 Parent ngAfterContentChecked => ${this.age}`);
    }

    ngAfterViewInit() {
        console.log(`A08 Parent ngAfterViewInit => ${this.age}`);
    }

    ngAfterViewChecked() {
        console.log(`A08 Parent ngAfterViewChecked => ${this.age}`);
    }
}