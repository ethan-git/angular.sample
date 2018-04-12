import { Component } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ProductType } from '../types/iProductType';
import { A04HttpService } from '../service/A04.http.service';

@Component({
    selector: 'a04Component',
    template: `
        <div class="panel-default">
            <div class="panel-heading">
                <h3>4.HTTP Service</h3>
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
    providers: [A04HttpService]
})
export class A04Component {
    public products: Array<ProductType>;

    constructor(private http: A04HttpService) { }

    ngOnInit() {
        this.getData();
    }

    public getData(): void {
        this.http.get()
            .subscribe(
                (data: ProductType[]) => {
                    this.products = data;
                }
            )
    }
}