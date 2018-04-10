import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 128 page
@Component({
    selector: 'product-data',
    template: `<h1>Product Data</h1>
        <div>
            ProductID: {{productID}}<br>
            isProd: {{isProd}}<br>
            Name: {{name}}
        </div>
    `
})
export class ProductDataComponent{
    public id: string;
    public num: string;

    public isProd: string;
    public name: string;
    public age: number;

    constructor(public ac: ActivatedRoute){}
    
}