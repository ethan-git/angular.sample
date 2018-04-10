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
                    
                </div>
                <br>

                <h4>i18nPlural</h4>
                <div>
                    
                </div>
            </div>
        </div>
    `
})
export class A03Component{
    public num: number = 1;

    public fruit: Object = {
        'apple': '사과',
        'banana': '바나나',
        'grape': '포도',
        'orange': '오렌지',
        'manago': '망고',
        'watermelon': '수박',
        'kiwi': '키위'
    }

    public apple: string = 'apple';
    
}