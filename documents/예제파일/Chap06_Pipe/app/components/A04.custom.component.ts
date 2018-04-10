import { Component } from '@angular/core';

@Component({
    selector: 'a04Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">   
                <h3>Custom Pipe</h3>
            </div>

            <div class="panel-body">
                <h4>Replace</h4>
                <div>
                    
                </div>
                <br>

		        <h4>Abbr</h4>
                <div>
                    
                </div>
                <br>


                <h4>LimitTo</h4>
                <div class="form-group">
                    <label for="num">Number</label>
                    <select class="form-control" name="num">
                        <option></option>
                    </select>
                    <br>

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
                <br>


                <h4>Search</h4>
                <div>
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

    public obj: Array<Object> = [
        {id: 1, name: 'Hong', kor: 90, eng: 71},
        {id: 2, name: 'Jimea', kor: 80, eng: 72},
        {id: 3, name: 'NolBu', kor: 70, eng: 73},
        {id: 4, name: 'HungBu', kor: 60, eng: 74},
        {id: 5, name: 'Ih', kor: 50, eng: 85}
    ]

}
