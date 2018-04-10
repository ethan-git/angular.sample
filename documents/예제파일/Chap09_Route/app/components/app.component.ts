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
            <a>HOME</a> | 
            <a>HOME</a> | 
            <a>PRODUCT</a> |
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
            
        </div>
    `,
})
export class AppComponent  { 

}

