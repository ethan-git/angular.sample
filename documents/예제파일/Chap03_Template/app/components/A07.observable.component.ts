
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'a07Component',
    template: `
        <div class="panel-heading">
            <!-- 247 page -->
            <h3>Observable Event Demo</h3>
        </div>

        <div class="panel-body">
            <input type="text" class="form-control" placeholder="Enter stock" [formControl]="searchInput">
        </div>
    `,
})
export class A07Component  { 
    searchInput: FormControl = new FormControl('');

}