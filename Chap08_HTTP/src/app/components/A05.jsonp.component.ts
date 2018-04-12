import { Component } from '@angular/core';
import { Jsonp, URLSearchParams, RequestOptionsArgs, Response } from '@angular/http';

@Component({
    selector: 'a05Component',
    template: `
    <div class="panel-default">
        <div class="panel-heading">
            <h3>5.JSONP</h3>
        </div>
        <div class="panel-body">
            <label>검색어
            <input type="text" class="form-control" [(ngModel)]="keyword">
            </label>
            <button class="btn btn-primary" (click)="getWiki()">Search</button>
        </div>
        <div class="panel-body" *ngFor="let item of wikiData">
            <b><a [href]="item.url">{{item.title}}</a></b><br>
            <div>{{item.desc}}
            </div>
        </div>
    </div>
    `,
    providers: []
})
export class A05Component {
    // https://en.wikipedia.org/w/api.php?search=JAVASCRIPT&action=opensearch&format=json&callback=JSONP_CALLBACK

    // 결과 데이터를 담을 변수
    public wikiData: Array<any>;

    // 검색어
    public keyword: string = 'JavaScript';

    // 매개변수를 관리하는 객체. import 필수(http module에 있음)
    public params: URLSearchParams = new URLSearchParams();

    // get(), post() 등을 호출할때 전달되야되는 값을 묶는 역할을 하는 객체
    public request: RequestOptionsArgs;

    // Jsonp 서비스는 httpModule이 관리하지 않고 JsonpModule이 관리하므로
    // HttpModule과는 별도로 module에 JsonpModule을 로드해야 한다.
    constructor(private jsonp: Jsonp) { }

    ngOnInit() {
        this.getWiki();
    }

    public getWiki(): void {
        // 전달할 파라메터부터 정리
        // this.params.set('key', value);
        this.params.set('search', this.keyword);
        this.params.set('action', 'opensearch');
        this.params.set('format', 'json');
        this.params.set('callback', 'JSONP_CALLBACK');

        let url = 'https://en.wikipedia.org/w/api.php';

        // this.request = {
        //     params: this.params
        // }      

        // this.jsonp.get(url, this.request)
        //     .subscribe(
        //         (data:Response) => {
        //             console.log(data);
        //         }
        //     )

        this.request = {
            params: this.params,
            method: 'GET'
        }

        this.jsonp.request(url, this.request)
            // JSON으로 변환
            .map((data: Response) => {
                return data.json();
            })
            // 변환된 데이터를 사용 가능하도록 제공
            .map((data: Response) => {
                let result: Array<any> = [];
                for (let i = 0; i < data[1].length; i++) {
                    result.push({
                        title: data[1][i],
                        desc: data[2][i],
                        url: data[3][i]
                    });
                }
                return result;
            })
            .subscribe(
                (data: Array<any>) => {
                    console.log(data);
                    this.wikiData = data;
                }
            )
    }
}