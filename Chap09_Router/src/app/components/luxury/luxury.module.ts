// luxury.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryComponent } from './luxury.component';
import { RouterModule } from '@angular/router';

// CommonModule은 bootstrap이 없음.
// 추후에 mainModule에 올려져서 사용할 목적으로 기술
// 각 Group별로 정의 할 목적으로 사용(팀별프로젝트 등)
// mainModule인 appModule의 declarations에 LuxuryComponent을 별도로
// 올릴 필요 없음
@NgModule({
    declarations: [LuxuryComponent],
    imports: [CommonModule,
        // 여기서 등록이 완료되서 appModule에 올려졌으므로 appModule에 등록 안하고
        // 바로 사용 가능. 따라서 app.router.ts 파일에도 패스 등록 안함
        RouterModule.forChild([
            { path: 'luxury', component: LuxuryComponent }
        ])
    ],
    exports: [],
    providers: []
})
export class LuxuryModule { }