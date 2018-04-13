import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 128 page
@Component({
    selector: 'product-args',
    template: `<h1>Product Argument</h1>
        <div>
            Age: {{age}}<br>
            isProd: {{isProd}}<br>
            Name: {{name}}<br>
            
        </div>
    `
})
export class ProductArgsComponent {
    public age: string;
    public isProd: boolean;
    public name: string;

    constructor(public ac: ActivatedRoute) { }

    ngOnInit() {
        this.age = this.ac.snapshot.queryParams['age'];

        this.ac.queryParams.subscribe(
            (data: any) => {
                this.isProd = data['isProd'];
                this.name = data['name'];
            })
    }
}


