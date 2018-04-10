import { Component } from '@angular/core';

@Component({
    selector: 'a02One',
    template: `
        <div class="panel-body">
            <!-- 284 page -->
            <h4>Child Component</h4>

            <p>
                Normal: <br>
                Name: <br>
                Object: <br>
                Array: <br>

                Age: <br>
                Company: <br>
                Static: 
            </p>
        </div>
    `,
    styles: [`
        div { border: 1px solid blue; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})
export class A02One { }

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel-body">
            <h3>Parent Component</h3>
            <div>
                <div class="col-md-2">
                    <label>Name</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-md-2">
                    <label>Obj</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-md-2">
                    <label>Ary</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-md-2">
                    <label>Age</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-md-2">
                    <label>Company</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-md-2">
                    <label>Static</label>
                    <input type="text" class="form-control">
                </div>
            </div>
            <a02One></a02One>
        </div>
    `,
    styles: [`
        .box { border: 1px solid orange; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})
export class A02Component {
    public name: string = 'HongGilDong';
    public obj: any = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: string[] = ['One','Two','Three'];
    public age: number = 20;
    public company: string = 'Multi';

    public _static: string = 'Static Property';

    
}
