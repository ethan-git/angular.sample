
import { Component } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Observable 객체를 promise 객체로 변경해주는 메소드
import 'rxjs/add/operator/toPromise';

import { ProductType } from '../types/iProductType';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel-default">
            <div class="panel-heading">
                <h3>2.HTTP Service</h3>
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
                        <td><a (click)="setData(item)">{{item.name}}</a></td>
                        <td>{{item.category}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.expiry}}</td>
                    </tr>
                </table>
                <button class="btn btn-primary" (click)="getHttp()">Load</button>
            </div>

            <div class="panel-body">
                Name: {{item?.name}}<br>
                Category: {{item?.category}}<br>
                Price: {{item?.price}}<br>
                Expiry: {{item?.expiry}}<br>
            </div>
        
        </div>
    `,
})
export class A02Component {

    public products: Array<ProductType>;
    public item: ProductType;

    // module에 httpModule이 미리 로드되어야 사용 가능
    constructor(private http: Http) { }

    ngOnInit() {
        // this.getHttp();
    }

    public setData(item: ProductType) {
        this.item = item;
    }

    public getHttp(): void {
        // get() => Data 전체 또는 1개를 가져올때
        // post() => Data 입력
        // put() => 수정
        // delete() => 삭제
        // request() => 위의 메소드를 다 사용 가능(지정 사용)
        this.http.get('assets/resources/productData.json')
            .toPromise()
            .then(
                (data: Response) => {       // Response도 ipmort 되어야 함
                    console.log(data);
                    this.products = data.json();
                    console.log(this.products);
                },
                (error: Response) => {
                    console.log(error.status);
                    console.log(error.statusText);
                    console.log(error.url);
                }
            )
            .catch(
                (error: any) => {
                    console.log('Catch Error');
                }
            )
    }
}