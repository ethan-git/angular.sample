import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'productChild',
    template: `
        <div class="panel-boyd">
            <h1>Product Child Component</h1>
            <div>
                <p>
                    <a>Description</a> | 
                    <a>Seller Info</a>
                </p>

                
            </div>
        </div>
    `
})
export class ProductChildComponent{
    
}