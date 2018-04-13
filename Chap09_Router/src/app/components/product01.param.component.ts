import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-param',
    template: `
        <h1>Product Details for Product: {{id}} / {{num}}</h1>
    `,
    styles: ['.product {background: cyan}; display: block; ']
})
export class ProductParamComponent {
    public id: string;      // 필요에 따라 캐스팅해서 사용
    public num: string;

    constructor(private ac: ActivatedRoute) { }

    ngOnInit() {
        console.log(this.ac);

        this.id = this.ac.snapshot.params['id'];

        this.ac.params.subscribe
            ((data: any) => {
                this.num = data['num'];
            })
    }
}