import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { headersToString } from 'selenium-webdriver/http';

@Injectable()
export class ProfittService {

    constructor(private http: Http) { }

    get(url: string, year: string): Observable<string[]> {
        // 파라메터 정의를 위한 객체
        let params: URLSearchParams = new URLSearchParams();
        // option 묶음 객체
        let request: RequestOptionsArgs;

        // 파라메터 세팅
        params.set('year', year);

        // 전송할 옵션 묶음
        request = {
            method: 'GET',
            params: params
        }

        return this.http.request(url, request)
            .map((res: Response) => res.json())
            .map((data: Response) => data['profit'])     //profit 요소만 사용
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}