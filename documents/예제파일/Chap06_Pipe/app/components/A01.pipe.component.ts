import { Component }          from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Pipe Date / Currency / JSON</h3>
            </div>

            <div class="panel-body">
                <h4>Date Pipe</h4>

                <br>

                <h4>Date Pipe 단축형</h4>
                
            </div>

            <div class="panel-body">
                <h4>통화코드 ISO 4217 규격에 따름.</h4>

            </div>

            <div class="panel-body">
                <h4>JSON</h4>

            </div>
        </div>
    `,
})
export class A01Component{
    public today: Date = new Date();       // 날짜 형식
    public todayUTC: number = Date.now();  // 숫자 형식 1970.1.1 00:00:00의 mile sec
    public todayISO: string = this.today.toISOString();    // 문자 형태

    public obj: any = {
        name: 'Hong',
        age: 20,
        ary: ['One','Two'],
        info: {
            id: 10,
            add: 'Seoul'
        }
    }
}
