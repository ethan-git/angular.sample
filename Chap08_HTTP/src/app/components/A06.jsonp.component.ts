import { Component } from '@angular/core';
import { WikiService } from '../service/A06.wiki.service';

@Component({
    selector: 'a06Component',
    template: `
    <div class="panel-default">
        <div class="panel-heading">
            <h3>6.JSONP</h3>
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
    providers: [WikiService]
})
export class A06Component {
    public wikiData: Array<any>;
    public keyword: string = 'JavaScript';

    constructor(private wiki: WikiService) { }

    ngOnInit() {
        this.getWiki();
    }

    public getWiki(): void {
        this.wiki.getWiki(this.keyword)
            .subscribe(
                (data: any) => {
                    console.log(data);
                    this.wikiData = data;
                }
            )
    }
}