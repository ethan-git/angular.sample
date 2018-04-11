
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
            <input type="text" class="form-control" placeholder="Enter stock" 
                    [formControl]="searchInput">
        </div>

        <div class="panel-body">
            {{result}}
        </div>
    `,
})
export class A07Component { 
    searchInput: FormControl = new FormControl('');

    public result: string;

    constructor(){
        console.log(this.searchInput.valueChanges);
    }

    ngOnInit() {
        // 발생자 : Observable 객체
        this.searchInput.valueChanges
            .map(
                (data: string) => {
                    return data.toUpperCase();
                }
            )
            .map(
                (data: string) => {
                    return data.split('');
                }
            )
            .map( (data: string[]) => data.reverse() )
            .map( (data: string[]) => data.join('') )
        // 수신자
            .subscribe(
            (data: string) => {
                // console.log(data);
                this.result = data;
            }
        );
    }
}