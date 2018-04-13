import { Component } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    template: `
        <div class="panel-heading">
            <h3>Router</h3>
        </div>

        <div class="panel-body">
            <a routerLink="">HOME</a> | 
            <a [routerLink]="['home']">HOME</a> | 
            <a [routerLink]="['product']">PRODUCT</a> |
            <a (click)="simpleLink('product')">PRODUCT</a> |
            <br>

            <a [routerLink]="['productParam/10/data/hong']">PRODUCT PARAM 10</a> | 
            <a (click)="simplePath('productParam', '20', 'data', 'nulBu')">PRODUCT PARAM 20</a> | 
            <a [routerLink]="['productData/100']">PRODUCT DATA</a> | 
            <!-- 주소줄에 key=value 형태로 추가된다 -->
            <a [routerLink]="['productArgs']" [queryParams]="{ isProd: true, name: 'HongGilDong', age: 30 }">PRODUCT ARGS</a> | 
            <a (click)="simpleQuery('productArgs', {queryParams: {isProd: true, name: 'HongGilDong', age: 30}})">PRODUCT ARGS</a> | 
            <br>

            <a [routerLink]="['productChild']">Child</a> | 
            <a [routerLink]="['productActive']">Activate</a> | 
            <br>

            <!-- router-outlet에 들어갈 컴퍼넌트의 이름을 outletName: '링크명', 형태로 지정 -->
            <a [routerLink]="[{outlets: {primary: 'sub', main: 'about', footer: 'content'}}]">All View</a> | 
            <a [routerLink]="[{outlets: {primary: 'sub', main: 'about', footer: null}}]">Two View</a> | 
            <a [routerLink]="[{outlets: {primary: null, main: 'about', footer: null}}]">One View</a> | 
            <br>

            <!-- app.router.ts에 없음. luxury 폴더의 luxury.router.ts에서 정의 -->
            <a [routerLink]="['luxury']">Luxury</a> | 

            <a [routerLink]="['lazy/luxuryLazy']">Luxury Lazy</a> | 
            <br>
            
            <button>HOME</button>
            <button>PRODUCT</button>
            <button>PARAM</button>
        </div>

        <div class="panel-body">
            <!-- module에 router가 구성되어 있어야 사용 가능 -->
            <router-outlet ></router-outlet>
        </div>

        <div class="panel-body">
            <router-outlet name="main"></router-outlet>
        </div>

        <div class="panel-body">
            <router-outlet name="footer"></router-outlet>
        </div>
    `,
})
export class AppComponent {

    // controller에서 링크를 위해 먼저 router를 주입받아 navigater 메소드를
    // 이용하여 패스 설정. 내장 서비스라 providers 기술 불필요
    constructor(private router: Router) { }

    public simpleLink(url: string): void {
        this.router.navigate([url])
    }

    public simplePath(url: string, ...path: string[]): void {
        let urlPath: string[] = [];
        urlPath.push(url);
        urlPath.push(...path);
        // urlPath = urlPath.concat(path);
        this.router.navigate(urlPath)
    }

    public simpleQuery(url: string, args: any): void {
        this.router.navigate([url], args)
    }
}

