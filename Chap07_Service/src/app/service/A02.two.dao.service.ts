// A02.two.dao.service.ts

import { Injectable } from '@angular/core';
import { TwoVOService } from './A02.two.vo.service';

@Injectable()
export class TwoDAOService {

    public getTotal(vo: TwoVOService): number {
        vo.total = vo.kor + vo.eng;
        return vo.total;
    }

    public getAvg(vo: TwoVOService): number {
        vo.avg = vo.total / 2;
        return vo.avg;
    }

    public display(vo: TwoVOService): string {
        return `${vo.name}님의 총점은 ${vo.total}이고 평균은 ${vo.avg}입니다.`;
    }
}