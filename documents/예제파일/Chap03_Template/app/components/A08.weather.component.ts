
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'a08Component',
    template: `
    <div class="panel-heading">
        <!-- 259 page -->
        <h3>Observable Event Demo</h3>
    </div>

    <div class="panel-body">
        <input type="text" class="form-control" placeholder="Enter stock" [formControl]="searchInput"><br>
        Temperature: {{temperature}}
    </div>
    `,
})
export class A08Component  { 
    private baseWeatherURL : string = 'http://api.openweathermap.org/data/2.5/weather?q=';
    private urlSuffix : string = '&units=metric&appid=ca3f6d6ca3973a518834983d0b318f73';
    
    public searchInput: FormControl = new FormControl();
    public temperature: string;

    constructor(public http: Http) {}
    
}