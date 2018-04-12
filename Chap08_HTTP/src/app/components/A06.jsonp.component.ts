import { Component } from '@angular/core';

@Component({
    selector: 'a06Component',
    template: `
    <div class="panel-default">
        <div class="panel-heading">
            <h3>JSONP</h3>
        </div>
        <div class="panel-body">
            <label>검색어
            <input type="text" class="form-control">
            </label>
            <button class="btn btn-primary">Search</button>
        </div>
        <div class="panel-body">
            <b></b><br>
            
        </div>
    </div>
    `,
    providers: [ ]
})
export class A06Component  { 
    
}