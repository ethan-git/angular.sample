// app.router.ts

import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProductDetailComponent } from "./product.component";
import { ProductParamComponent } from "./product01.param.component";
import { ProductDataComponent } from "./product02.data.component";
import { ProductArgsComponent } from "./product03.args.component";
import { ProductChildComponent } from "./product04.childMain.component";
import { DescriptionComponent } from "./childComponent/description.component";
import { SellerComponent } from "./childComponent/seller.component";
import { ProductActivateComponent } from "./product05.active.component";
import { LoginGuardService } from "../service/login.guard.service";
import { LogoutGuardService } from "../service/logout.guard.service";
import { SubHomeComponent } from "./company/subHome.component";
import { AboutComponent } from "./company/about.component";
import { ContentComponent } from "./company/content.component";
import { NotFoundComponent } from "./notFound.component";


let routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductDetailComponent },
    // id는 참조 변수명이 되며 페이지 링크는 'productParam/어떤값' 형태가 된다.
    // 위의 '어떤값'이 id에 저장되는 값이다.
    { path: 'productParam/:id/data/:num', component: ProductParamComponent },
    {
        path: 'productData/:id', component: ProductDataComponent,
        data: [
            { isProd: true, name: 'HongGilDong', age: 30 },
            { isProd: false, name: 'NolBu', age: 50 }
        ]
    },

    // 링크에서 전달할 파라메터 값을 지정한다.
    { path: 'productArgs', component: ProductArgsComponent },
    {
        path: 'productChild', component: ProductChildComponent,
        children: [
            { path: 'description', component: DescriptionComponent },
            { path: 'seller/:id', component: SellerComponent }
        ]
    },
    {
        path: 'productActive', component: ProductActivateComponent,
        // module의 providers에 등록 해야 한다
        canActivate: [LoginGuardService],       // []에 서비를 구현하여 정의
        canDeactivate: [LogoutGuardService]
    },

    // 컴퍼넌트가 들어갈 위치를 지정한다.
    { path: 'sub', component: SubHomeComponent, outlet: 'primary' },
    { path: 'about', component: AboutComponent, outlet: 'main' },
    { path: 'content', component: ContentComponent, outlet: 'footer' },

    // Lazy 모듈에 대한 경로를 설정한다.
    // 경로 => app로부터경로/../../파일명#클래스명
    // 링크를 걸 경우는 path의 lazy/router의path
    { path: 'lazy', loadChildren: 'app/components/luxury/luxuryLazy.module#LuxuryLazyModule' },

    // 항상 맨 마지막에 기술해야 한다
    // 위의 패스와 다른 패스명이 요청되면 ** 패스가 실행되어
    // 해당 NotFoundComponent가 표시된다
    { path: '**', component: NotFoundComponent}
];

export const appRouter = RouterModule.forRoot(routes);