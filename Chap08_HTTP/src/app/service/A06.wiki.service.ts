// A06.wiki.service.ts

import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptionsArgs, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WikiService {

    public params: URLSearchParams = new URLSearchParams();
    public request: RequestOptionsArgs;
   

    constructor(private jsonp: Jsonp) { }

    public getWiki(keyword: string): Observable<string[]> {
        this.params.set('search', keyword);
        this.params.set('action', 'opensearch');
        this.params.set('format', 'json');
        this.params.set('callback', 'JSONP_CALLBACK');
        
        let url = 'https://en.wikipedia.org/w/api.php';

        this.request = {
            params: this.params,
            method: 'GET'
        }

        return this.jsonp.request(url, this.request)
            .map((res: Response) => res.json())
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
            .catch(this.handleError);
    }
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}