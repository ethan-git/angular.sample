import { AppComponent } from './components/app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LuxuryModule } from './components/luxury/luxury.module';

import { appRouter } from './components/app.router';

import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';
import { ProductParamComponent } from './components/product01.param.component';
import { ProductDataComponent } from './components/product02.data.component';
import { ProductArgsComponent } from './components/product03.args.component';
import { ProductChildComponent } from './components/product04.childMain.component';
import { DescriptionComponent } from './components/childComponent/description.component';
import { SellerComponent } from './components/childComponent/seller.component';
import { ProductActivateComponent } from './components/product05.active.component';
import { SubHomeComponent } from './components/company/subHome.component';
import { AboutComponent } from './components/company/about.component';
import { ContentComponent } from './components/company/content.component';

import { LoginGuardService } from './service/login.guard.service';
import { LogoutGuardService } from './service/logout.guard.service';
import { NotFoundComponent } from './components/notFound.component';


@NgModule({
    imports: [BrowserModule, FormsModule, appRouter, LuxuryModule
        // RouterModule.forRoot([
        //     // path가 링크이름, component가 router-outlet에 로드될 컴퍼넌트 지정
        //     { path: '', component: HomeComponent },
        //     { path: 'home', component: HomeComponent },
        //     { path: 'product', component: ProductDetailComponent }
        // ])
    ],
    // 라우터에 참여하는 모든 컴퍼넌트도 뷰에 참여하므로 정의가 필수
    declarations: [AppComponent, HomeComponent, ProductDetailComponent,
        ProductParamComponent, ProductDataComponent, ProductArgsComponent,
        ProductChildComponent, DescriptionComponent, SellerComponent,
        ProductActivateComponent, SubHomeComponent, AboutComponent, ContentComponent
        ,NotFoundComponent
    ],
    providers: [LoginGuardService, LogoutGuardService],
    bootstrap: [AppComponent]
})
export class AppModule { }