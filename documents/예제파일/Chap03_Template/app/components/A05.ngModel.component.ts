import { Component }      from '@angular/core';

@Component({
    selector: 'a05Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <!-- 243 page -->
                <h3>양방향 바인딩</h3>
            </div>
            
            <div class="panel-body">
                <input class="form-control">
                <input class="form-control">
                <input class="form-control">
                <br>

                <select class="form-control">
                    <option></option>
                </select>

                <br>
                
                <span>
                    <input type="radio" class="form-control">
                </span>
            </div>
        </div>
    `
})
export class A05Component{
    public name: string = 'HongGilDong';
    public students: Object[] = [
        {name: 'HongGilDong', age: 20, address: 'Seoul'},
        {name: 'IlJimea', age: 25, address: 'Busan'},
        {name: 'ImGGekJung', age: 30, address: 'InChen'},
        {name: 'NolBu', age: 50, address: 'Seoul'},
        {name: 'HungBu', age: 40, address: 'Seoul'},
    ]
}