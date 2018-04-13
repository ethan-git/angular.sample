// luxury.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { luxuryLazyRouter } from './luxuryLazy.router';
import { LuxuryLazyComponent } from './luxuryLazy.component';

// app.module에 올리지 않는다. 사용자가 클릭을 하면 이 모듈을 로드해서
// 포함된 컴퍼넌트를 클릭한 순간에 올린다
// app.router.ts 파일에만 이 모듈에 대한 경로 링크를 설정한다.
@NgModule({
    declarations: [LuxuryLazyComponent],
    imports: [CommonModule, luxuryLazyRouter],
    exports: [],
    providers: []
})
export class LuxuryLazyModule { }