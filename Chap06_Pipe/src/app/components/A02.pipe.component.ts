import { Component } from '@angular/core';
import { PercentPipe, DecimalPipe } from '@angular/common';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Pipe Percent / Decimal / Slice</h3>
            </div>

            <div class="panel-body">
                <h4>Percent</h4>
                <div>
                    1.percent : {{num | percent}}<br>
                    2.percent : {{12345.6789 | percent}}<br>

                    <!-- 4 버전에서는 소수점 자리수 3 이하는 모두 3자리로 표시됨 -->
                    3.percent : '1.1' : {{12345.6789 | percent : '1.1'}}<br>
                    4.percent : '1.2' : {{12345.6789 | percent : '1.2'}}<br>
                    5.percent : '1.3' : {{12345.6789 | percent : '1.3'}}<br>

                    <!-- 4 버전에서는 1.4 부터는 한자리로 지정 불가 에러 발생 
                        5부터는 문제 없이 다 사용 가능
                        마지막 잘려나가는 자리에서 반올림되어 표시됨
                    -->
                    6.percent : '1.4' : {{12345.6789 | percent : '1.4'}}<br>
                    6.percent : '1.4-4' : {{12345.6789 | percent : '1.4-4'}}<br>
                    6.percent : '1.1-1' : {{12345.6789 | percent : '1.1-1'}}<br>
                    
                    7.percent : '1.1-3' : {{12345.6789 | percent : '1.1-3'}}<br>
                    8.method : {{getPercent()}}
                </div>
                <br>

                <h4>Decimal Pipe</h4>
                <div>
                    1.number : {{num | number}}<br>
                    2.number : {{12345.6789 | number}}<br>

                    <!-- 4 버전에서는 소수점 자리수 3 이하는 모두 3자리로 표시됨 -->
                    3.number : '1.1' : {{12345.6789 | number : '1.1'}}<br>
                    4.number : '1.2' : {{12345.6789 | number : '1.2'}}<br>
                    5.number : '1.3' : {{12345.6789 | number : '1.3'}}<br>

                    <!-- 4 버전에서는 1.4 부터는 한자리로 지정 불가 에러 발생 
                        5부터는 문제 없이 다 사용 가능
                        마지막 잘려나가는 자리에서 반올림되어 표시됨
                    -->
                    6.number : '1.4' : {{12345.6789 | number : '1.4'}}<br>
                    6.number : '1.4-4' : {{12345.6789 | number : '1.4-4'}}<br>
                    6.number : '1.1-1' : {{12345.6789 | number : '1.1-1'}}<br>
                    
                    7.number : '1.1-3' : {{12345.6789 | number : '1.1-3'}}<br>
                    8.method : {{getDecimal()}}
                </div>
                <br>

                <h4>String slice</h4>
                <div>
                    
                </div>
            </div>
        </div>
    `
})
export class A02Component {
    public num: number = 1.23;
    public str: string = '동해물과 백두산이 마르고 닳도록';

    // providers는 module에서 정의했음
    constructor(private perPipe: PercentPipe, private numPipe: DecimalPipe) { }

    public getPercent(): string {
        return this.perPipe.transform(12345.6789, '1.1-3');
    }

    public getDecimal(): string {
        return this.numPipe.transform(12345.6789, '1.1-3');
    }
}