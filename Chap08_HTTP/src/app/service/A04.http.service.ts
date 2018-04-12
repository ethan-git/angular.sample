// A04.http.service.ts

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProductType } from '../types/iProductType';

@Injectable()
export class A04HttpService {

    constructor(private http: Http) {}

    public get(): Observable<ProductType[]> {
        return this.http.get('assets/resources/productData.json')
        .map((res: Response) => res.json())
        .catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}