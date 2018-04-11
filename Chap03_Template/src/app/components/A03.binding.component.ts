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
                Name: {{name}}, kor: {{kor}}, Eng: {{eng}} <br>
                Total: {{getTotal()}}, Avg: {{getAvg(2)}}<br>
                ID: {{hong.id}}, Address: {{hong.address}}
            </div>

            <div class="panel-body">
                <h4>Safe Navigation Operator</h4>
                없는 기본형 변수 참조(표시안됨-에러없음) Age: <!--{{age}}--><br>
                없는 객체형 변수 참조(?없으면 에러) user.name: {{user?.name}}
            </div>

            <div class="panel-body">
                <!-- 231 page -->
                <h4>속성 바인딩</h4>
                Name: <input type="text" class="form-control" value="{{name}}"><br>
                <!--컨트롤러의 변수값을 사용할 경우는 속성을 []로 묶고 변수명을 지정 
                    []로 묶은 속성의 값은 변수명을 의미
                -->
                Name: <input type="text" class="form-control" [value]="name" (input)="onChange($event)"><br>
                Add: <input type="text" class="form-control" [attr.value]="hong.address"><br>
                <!-- 
                -->
                Age: <input type="text" class="form-control" [placeholder]="getTotal()"><br>
            </div>

            <div class="panel-body">
                <!-- 234 page -->
                Name: <input type="text" class="form-control" [(ngModel)]="name">
            </div>
        </div>
    `
})
export class A03Component{
    public name: string = 'HongGilDong';
    public kor: number = 80;
    public eng: number = 95;
    public total: number;

    // 선언만 하고 값이 없는 객체형도 참조할 경우는 ? 필요
    public user: {name: string};

    public hong: {id: number, address: string} = {
        id: 20,
        address: 'Seoul'
    }
    
    public getTotal(): number {
        return this.kor + this.eng;
    }

    public getAvg(num: number): number {
        return this.getTotal() / num;
    }

    public onChange(evt: Event): void{
        console.log(evt);
        // EventTarget 객체를 해당 element 객체로 캐스팅
        let elem: HTMLInputElement = <HTMLInputElement>evt.target;
        this.name = elem.value;
    }
}