import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'productChild',
    template: `
        <div class="panel-boyd">
            <h1>Product Child Component</h1>
            <div>
                <p>
                    <a [routerLink]="['description']">Description</a> | 
                    <a [routerLink]="['seller/500']">Seller Info</a>
                </p>

                <!-- children으로 설정된 내부 컴퍼넌트가 로드 될 영역 -->
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class ProductChildComponent{
    
}