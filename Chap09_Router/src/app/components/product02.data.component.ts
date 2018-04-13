import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 128 page
@Component({
    selector: 'product-data',
    template: `<h1>Product Data</h1>
        <div>
            ProductID: {{id}}<br>
            isProd: {{isProd}}<br>
            Name: {{name}}<br>
            Age: {{age}}
        </div>
    `
})
export class ProductDataComponent {
    public id: string;
    public num: string;

    public isProd: string;
    public name: string;
    public age: Number;

    constructor(public ac: ActivatedRoute) { }

    ngOnInit() {
        this.isProd = this.ac.snapshot.data[0]['isProd'];

        this.ac.data.subscribe(
            (data: any) => {
                this.name = data[0]['name'];
                this.age = data[0]['age'];
            }
        )

        this.ac.params.subscribe(
            (data: any) => {
                this.id = data['id'];
            }
        )

    }
}