import { Component } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'app',
    template: `
        <div class="panel-heading">
            <h3>Router</h3>
        </div>

        <div class="panel-body">
            <a routerLink="">HOME</a> | 
            <a [routerLink]="['home']">HOME</a> | 
            <a [routerLink]="['product']">PRODUCT</a> |
            <br>

            <a>PRODUCT PARAM 10</a> | 
            <a>PRODUCT PARAM 20</a> | 
            <a>PRODUCT DATA</a> | 
            <a>PRODUCT ARGS</a> | 
            <a>PRODUCT ARGS</a> | 
            <br>

            <a>Child</a> | 
            <a>Activate</a> | 
            <br>

            <a>All View</a> | 
            <a>Two View</a> | 
            <a>One View</a> | 
            <br>

            <a>Luxury</a> | 

            <a>Luxury Lazy</a> | 
            <br>
            
            <button>HOME</button>
            <button>PRODUCT</button>
            <button>PARAM</button>
        </div>

        <div class="panel-body">
            <!-- module에 router가 구성되어 있어야 사용 가능 -->
            <router-outlet></router-outlet>
        </div>
    `,
})
export class AppComponent  { 

}

