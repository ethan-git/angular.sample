
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ProductType } from '../types/iProductType';

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel-default">
            <div class="panel-heading">
                <h3>3.HTTP Service</h3>
            </div>
            <div class="panel-body">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Expiry</th>
                    <tr>
                    <tr *ngFor="let item of products">
                        <td>{{item.name}}</td>
                        <td>{{item.category}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.expiry}}</td>
                    </tr>
                </table>
                <button class="btn btn-primary">Load</button>
            </div>

            <div class="panel-body">
                {{products | json}}
            </div>
        
        </div>
    `,
})
export class A03Component {                        // P423 Page

    public products: Array<ProductType>;

    constructor(private http: Http) { }

    ngOnInit() {
        this.getHttp();
    }

    public getHttp(): void {
        // 발행자
        this.http.get('assets/resources/productData.json')

            // 수신 후 재 발행
            .map((data: Response) => data.json())

            // 수신자
            .subscribe(
                (data: ProductType[]) => {
                    console.log(data);
                    this.products = data;
                }
            )
    }
}