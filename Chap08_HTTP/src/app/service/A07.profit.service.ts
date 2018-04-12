import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfittService {

    constructor(private http: Http) { }

    get(url: string): Observable<string[]> {
        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}