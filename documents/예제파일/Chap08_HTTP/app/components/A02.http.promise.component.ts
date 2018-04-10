
import { Component } from '@angular/core';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel-default">
            <div class="panel-heading">
                <h3>HTTP Service</h3>
            </div>
            <div class="panel-body">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Expiry</th>
                    <tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <button class="btn btn-primary">Load</button>
            </div>

            <div class="panel-body">
                
            </div>
        
        </div>
    `,
})
export class A02Component  { 
   
}