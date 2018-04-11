import { Component } from '@angular/core';

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">   
                <h3>Pipe i18nSelectPipe</h3>
            </div>

            <div class="panel-body">
                <h4>i18nSelect</h4>
                <div>
                    1. Apple: {{fruit.apple}}<br>
                    2. 문자열 키 - fruit['apple'] : {{fruit['apple']}}<br>
                    3. Angular - 'apple' | i18nSelect : fruit : {{'apple' | i18nSelect : fruit}}
                </div>
                <br>

                <h4>i18nPlural</h4>
                <div>
                    <input type="text" class="form-control" [(ngModel)]="num"><br>
                    {{num | i18nPlural : mapping }}
                </div>
            </div>
        </div>
    `
})
export class A03Component{
    public num: number = 1;

    public fruit: {[key: string] : string} = {
        'apple': '사과',
        'banana': '바나나',
        'grape': '포도',
        'orange': '오렌지',
        'manago': '망고',
        'watermelon': '수박',
        'kiwi': '키위'
    }

    public apple: string = 'apple';
    
    public mapping: {[key: string]: string} = {
        '=' : '0 이상의 숫자를 입력해주세요',
        '=0' : '0 이상의 숫자를 입력해주세요',
        '=1' : '1개는 구입할 수 없습니다',
        '=2' : '2개를 구입하셨습니다',
        '=3' : '3개를 구입하면 1개 보너스를 더 드립니다',
        'other' : '3개 이상은 구입할 수 없습니다'
    }
}