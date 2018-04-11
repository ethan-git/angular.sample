import { Component }          from '@angular/core';
import { DatePipe, CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Pipe Date / Currency / JSON</h3>

                <div>
                    {{obj.name | uppercase}}<br>
                    {{obj.name | lowercase}}<br>
                </div>
            </div>

            <div class="panel-body">
                <h4>Date Pipe</h4>
                    Today: {{today}}<br>
                     {{today | date}}<br>
                     {{today | date : 'yyyy-MM-dd E EEEE a hh:mm:ss SSSS' }} yyyy-MM-dd E EEEE a hh:mm:ss SSSS<br>
                     {{today | date : 'yy-M-dd EE  a h:m:s SSSS' }} yy-M-dd EE  a h:m:s SSSS<br>
                     {{today | date : 'y-MM-dd E EEEE a hh:mm:ss SSSS' }} y-MM-dd E EEEE a hh:mm:ss SSSS<br>
                    todayUTC: {{todayUTC}}<br>
                    {{todayUTC | date}}<br>
                    {{todayUTC | date : 'yyyy-MM-dd E EEEE a hh:mm:ss SSSS' }} yyyy-MM-dd E EEEE a hh:mm:ss SSSS<br>
                    {{todayUTC | date : 'yy-M-dd EE a h:m:s SSSS' }} yy-M-dd EE a h:m:s SSSS<br>
                    {{todayUTC | date : 'y-MM-dd E EEEE a hh:mm:ss SSSS' }} y-MM-dd E EEEE a hh:mm:ss SSSS<br>
                    todayISO: {{todayUTC}}<br>
                    {{todayISO | date}}<br>
                    {{todayISO | date : 'yyyy-MM-dd E EEEE a hh:mm:ss SSSS' }} yyyy-MM-dd E EEEE a hh:mm:ss SSSS<br>
                    {{todayISO | date : 'yy-M-dd EE  a h:m:s SSSS' }} yy-M-dd EE  a h:m:s SSSS<br>
                    {{todayISO | date : 'y-MM-dd E EEEE a hh:mm:ss SSSS' }} y-MM-dd E EEEE a hh:mm:ss SSSS<br>
                <br>

                <h4>Date Pipe 단축형</h4>
                    [Date] <br>fullDate: {{today | date : 'fullDate'}}<br>
                    longDate: {{today | date : 'longDate'}}<br> 
                    mediumDate: {{today | date : 'mediumDate'}}<br> 
                    shortDate: {{today | date : 'shortDate'}}<br>
                    [Time] <br> mediumTime: {{today | date : 'mediumTime'}}<br> 
                    shortTime: {{today | date : 'shortTime'}}<br>
                    [Full]<br> medium: {{today | date : 'medium'}}<br>
                    short: {{today | date : 'short'}}<br>
                    <br>
                    [Method] {{getDate()}}

            </div>

            <div class="panel-body">
                <h4>통화코드 ISO 4217 규격에 따름.</h4>
                1. {{12345.6789 | currency}} = currency<br>
                2. {{12345.6789 | currency : 'WON'}} = currency : 'WON'<br>
                3. {{12345.6789 | currency : 'KRW' : true}} = currency : 'KRW' : true<br>
                4. {{12345.6789 | currency : 'KRW' : false}} = currency : 'KRW' : false<br>
                5. {{12345.6789 | currency : 'KRW' : false : '1.4'}} = currency : 'KRW' : false : '1.4'<br>
                <!-- 1.1-3의 1-3은 표시 할 수 있는 범위를 지정 -->
                6. {{12345.6789 | currency : 'KRW' : false : '1.1-3'}} = currency : 'KRW' : false : '1.1-3'<br>

                <br>
                <!-- Angular 5 방식 -->
                [Angular 5 방식]
                1. {{12345.6789 | currency}} = currency<br>
                2. {{12345.6789 | currency : 'WON'}} = currency : 'WON' <br>
                3. {{12345.6789 | currency : 'CNY' : 'symbol'}} = currency : 'CNY' : 'symbol' <br>
                4. {{12345.6789 | currency : 'CNY' : 'code'}} = currency : 'CNY' : 'code'<br>
                5. {{12345.6789 | currency : 'CNY' : 'symbol-narrow' : '1.4'}} = currency : 'CNY' : 'symbol-narrow' : '1.4'<br>
                <!-- 1.1-3의 1-3은 표시 할 수 있는 범위를 지정 -->
                6. {{12345.6789 | currency : 'KRW' : false : '1.1-3'}} = currency : 'KRW' : false : '1.1-3'<br>

                <br>
                [Method] {{getCurrency()}}
            </div>

            <div class="panel-body">
                <h4>JSON</h4>

                {{obj}} = obj<br>
                {{obj | json}} = obj | json<br>

                <br>
                [Method] {{getJson()}}
            </div>
        </div>
    `,
    providers: [DatePipe, CurrencyPipe, JsonPipe]
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

    // 내장 파이프라 module에 DatePipe를 description에 기술하지 않고 바로 사용
    // 사용할 파이프를 객체화 하기 위해 providers: [PipeClassName]은 기술
    // 또는 module의 providers : [PipeClassName] 형태로 기술해도 된다.
    constructor(private datePipe: DatePipe, private currencyPipe: CurrencyPipe, private jsonPipe: JsonPipe){}

    public getDate(): string{
        // value | date : 'yyyy-MM-dd EEEE a hh:mm:ss SSSS'
        return this.datePipe.transform(this.today, 'yyyy-MM-dd hh:mm:ss');
    }

    public getCurrency(): string{
        return this.currencyPipe.transform(12345.6789, 'CNY', 'symbol', '1.1-3');
    }

    public getJson(): string{
        return this.jsonPipe.transform(this.obj);
    }
}
