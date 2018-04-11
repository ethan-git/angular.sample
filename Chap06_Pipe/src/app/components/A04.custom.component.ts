import { Component } from '@angular/core';
import { UpDownPipe } from '../pipe/custom.pipe';

@Component({
    selector: 'a04Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">   
                <h3>Custom Pipe</h3>

                {{ 'abc' | upDown }}<br>
                {{ 'abc' | upDown : 'up' }}<br>
                {{ 123 | upDown : 'up' }}<br>
                method: {{ getUpDown() }}<br>
            </div>

            <div class="panel-body">
                <h4>Replace</h4>
                <div>
                    1. {{'I am a Boy' | replacePipe : 'Boy' : 'Girl'}}<br>
                    2. {{'I am a Boy' | replacePipe}}<br>
                    3. {{'abc123def456abc' | replacePipe : delete_alpha : ''}}<br>
                    4. {{'abc123def456abc' | replacePipe : delete_number : ''}}<br>
                    5. {{'abc123def456abc' | replacePipe : delete_number}}<br>
                </div>
                <br>

		        <h4>Abbr</h4>
                <div>
                    1. {{str | abbrPipe}}<br>
                    2. {{str | abbrPipe : 10}}<br>
                    3. {{str | abbrPipe : 10 : '***'}}<br>
                    4. {{1234567890123456789 | abbrPipe}}<br>
                </div>
                <br>


                <h4>LimitTo</h4>
                <div class="form-group">
                    <label for="num">Number</label>
                    <select class="form-control" name="num" [(ngModel)]="displayNum">
                        <option *ngFor="let item of obj | countPipe">{{item}}</option>
                    </select>
                    <br>

                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>KOR</th>
                            <th>ENG</th>
                        </tr>
                        <tr *ngFor="let item of obj | limitTo : displayNum">
                            <td>{{item.id}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.kor}}</td>
                            <td>{{item.eng}}</td>
                        </tr>
                    </table>
                </div>
                <br>


                <h4>Search</h4>
                <div>
                    Field: 
                        <select class="form-control">
                            <option *ngFor="let item of obj">{{item.name}}</option>
                        </select>

                    Keyword: <input type="text" class="form-control"><br>

                    <label><input type="checkbox"> 대소문자 무시</label>
                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>KOR</th>
                            <th>ENG</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `
})
export class A04Component{
    public delete_alpha:RegExp = /[a-zA-Z]+/g;
    public delete_number:RegExp = /[0-9]+/g;
    public str: string = '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세';
    
    public displayNum: number = 3;
    public keyName: string = 'name';
    public ignoreCase: boolean = false;

    public obj: Array<any> = [
        {id: 1, name: 'Hong', kor: 90, eng: 71},
        {id: 2, name: 'Jimea', kor: 80, eng: 72},
        {id: 3, name: 'NolBu', kor: 70, eng: 73},
        {id: 4, name: 'HungBu', kor: 60, eng: 74},
        {id: 5, name: 'Ih', kor: 50, eng: 85}
    ]

    constructor(private upDownPipe: UpDownPipe){}

    public getUpDown(): string {
        return this.upDownPipe.transform('I am a Boy', 'up');
    }
}
