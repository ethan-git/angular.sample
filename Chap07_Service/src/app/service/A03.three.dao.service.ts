// A02.two.dao.service.ts

import { Injectable } from '@angular/core';
import { ThreeVO } from './A03.three.vo.service';
import { iJumsu } from './A03.iJumsu';
import { DecimalPipe } from '@angular/common';

@Injectable()
export class ThreeDAO implements iJumsu {
    //module에 등록한 DecimalPipe를 주입받아 사용
    constructor(private numPipe: DecimalPipe) { }

    public getTotal(vo: ThreeVO): number {
        vo.total = vo.kor + vo.eng + vo.math;
        return vo.total;
    }

    public getAvg(vo: ThreeVO): number {
        let result: string = this.numPipe.transform(vo.avg = vo.total / 3, '1.2-2');
        vo.avg = Number(result);
        return vo.avg;
    }

    public display(vo: ThreeVO): string {
        return `${vo.name}님의 총점은 ${vo.total}이고 평균은 ${vo.avg}입니다.`;
    }
}