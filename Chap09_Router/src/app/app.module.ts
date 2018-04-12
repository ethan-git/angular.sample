import { AppComponent } from './components/app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';

@NgModule({
    imports: [BrowserModule, FormsModule,
        RouterModule.forRoot([
            // path가 링크이름, component가 router-outlet에 로드될 컴퍼넌트 지정
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'product', component: ProductDetailComponent }
        ])
    ],
    // 라우터에 참여하는 모든 컴퍼넌트도 뷰에 참여하므로 정의가 필수
    declarations: [AppComponent, HomeComponent, ProductDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }