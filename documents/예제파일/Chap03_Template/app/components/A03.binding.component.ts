import { Component }          from '@angular/core';

@Component({
    selector: 'a03Component',
    template:`
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Binding</h3>
            </div>
            
            <div class="panel-body">
                <!-- 226 page -->
                <h4>일반 바인딩</h4>
                Name: , kor: , Eng: <br>
                Total: , Avg: <br>
                ID: , Address: 
            </div>

            <div class="panel-body">
                <h4>Safe Navigation Operator</h4>
                없는 기본형 변수 참조(표시안됨-에러없음) Age: <br>
                없는 객체형 변수 참조(?없으면 에러) user.name: 
            </div>

            <div class="panel-body">
                <!-- 231 page -->
                <h4>속성 바인딩</h4>
                Name: <input type="text" class="form-control"><br>
                Name: <input type="text" class="form-control"><br>
                Add: <input type="text" class="form-control"><br>
                Age: <input type="text" class="form-control"><br>
            </div>

            <div class="panel-body">
                <!-- 234 page -->
                Name: <input type="text" class="form-control">
            </div>
        </div>
    `
})
export class A03Component{
    public name: string = 'HongGilDong';
    public kor: number = 80;
    public eng: number = 95;
    public total: number;

    public hong: {id: number, address: string} = {
        id: 20,
        address: 'Seoul'
    }
    
}