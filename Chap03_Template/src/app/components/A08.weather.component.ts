
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
    
    ngOnInit() {
        // 발행자
        this.searchInput.valueChanges
        .debounceTime(1500)

        // 수신자 겸 가공 후 발행
        .switchMap(
            (data: string) => {
                return this.http.get(this.baseWeatherURL + data + this.urlSuffix);
            }
        )

        // 전체 데이터 받아서 json 형태로 재 발행
        .map( (data: any) => data.json() )

        // 위에서 받은 Json 데이터 중에서 main 항목만 재 발행
        .map( (data: JSON) => data['main'])
        // 수신자
        .subscribe(
            (data: any) => {
                // console.log(data);
                this.temperature = `Temp: ${data['temp']}, humidity: ${data['humidity']}`;
            }
        )
    }
}