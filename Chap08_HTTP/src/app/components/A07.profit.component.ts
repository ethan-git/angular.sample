import { Component } from '@angular/core';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ProfittService } from '../service/A07.profit.service';

@Component({
    selector: 'a07Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>
                    7.HTTP Service
                    <span class="label label-primary">profit</span>
                </h3>
            </div>

            <div class="panel-body form-inline">
                <div class="form-group">
                    <select class="form-control" [(ngModel)]='selectYear'>
                        <option value="All">All</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" (click)="getProfit()">Change</button>
                </div>
            </div>
            <div class="panel-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Month</th>
                            <th>Profit</th>
                            <th>Expenses</th>
                            <th>Amount</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let item of profitList">
                            <td>{{item.year}}</td>
                            <td>{{item.month}}</td>
                            <td>{{item.profit}}</td>
                            <td>{{item.expenses}}</td>
                            <td>{{item.amount}}</td>
                            <td>
                                <a (click)="show(item)">{{item.comment}}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            
            </div>

            <div class="panel-body">
                <textarea class="form-control">{{profitItem?.comment}}</textarea>
            </div>
        </div>
    `,
    providers: [ProfittService]
})
export class A07Component {
    // http://70.12.50.190:8080/Angular/profitList

    // 전체 데이터 받을 변수
    public profitList: Array<any>;

    // 선택시 1개의 데이터만 받을 변수
    public profitItem: any;

    // 선택 연도
    public selectYear: string = 'All';

    // 요청 주소
    private url: string = 'http://70.12.50.190:8080/Angular/profitList';

    constructor(private profit: ProfittService) { }

    ngOnInit() {
        this.getProfit();
    }

    public getProfit(): void {
        this.profit.get(this.url, this.selectYear)
            .subscribe(
                (data: string[]) => {
                    console.log(data);
                    this.profitList = data;
                })
    }

    // 한 줄 정보를 받아 변수에 대입
    public show(item: any): void{
        this.profitItem = item;
    }
}