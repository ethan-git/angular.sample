import { Component } from '@angular/core';
import { PromiseService } from '../service/A05.promise.service';


@Component({
    selector: 'a05Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>5.Jumsu Service</h3>
            </div>

            <div class="panel-body">
                
            </div>

            <div class="panel-body">
                Hong: <span *ngIf="data != null">{{data[0].name}}</span><br><br>
                <span *ngFor="let item of data">{{item.name}}<br></span>
            </div>
        </div>
    `,
    providers: [PromiseService]
})
export class A05Component {
    public data: any;

    constructor(private promise: PromiseService) { }

    ngOnInit() {
        this.promise.getData(true)
            .then(
                // 성공했을때 실행할 함수
                (data: any) => {
                    console.log(data);
                    this.data = data;
                },
                // 실패했을때 실행할 함수
                (error: any) => {
                    console.log(error.errorCode);
                    console.log(error.errorCode);
                }
            )
            .catch(
                (error: any) => {
                    console.log('Error');
                }
            )
    }
}
