import { Component } from '@angular/core';
import { TwoVOService } from '../service/A02.two.vo.service';
import { TwoDAOService } from '../service/A02.two.dao.service';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>2.Jumsu Service</h3>
            </div>

            <div class="panel-body">
                HongGilDong: <br>
                {{hongTotal}}
                <br>
            </div>
        </div>
    `,
    // 이 두 서비스는 이 컴포넌트에서만 사용 가능
    providers: [TwoVOService, TwoDAOService]
})
export class A02Component {
    public hongTotal: string;

    // 사용할 서비스의 의존성 주입
    constructor(private vo: TwoVOService, private dao: TwoDAOService) { }

    // vo에 필요한 데이터 세팅
    ngOnInit() {
        this.vo.name = 'Hong';
        this.vo.kor = 100;
        this.vo.eng = 90;

        this.dao.getTotal(this.vo);
        this.dao.getAvg(this.vo);
        this.hongTotal = this.dao.display(this.vo);
    }

}