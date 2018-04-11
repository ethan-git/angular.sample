import { Component }          from '@angular/core';

@Component({
    selector: 'a01Component',
    // template: `
    //     <div>
    //         <h3>Template Sample</h3>
    //     </div>

    //     <div class ="panel-body">
    //         Name : {{name}}<br>
    //         Obj ID: {{obj.name}} / {{obj.address}}<br>
    //         Array: {{ary[0]}} / {{ary[1]}}
    //     </div>
    // `
    templateUrl:'./../html/template.html'
})
export class A01Component{
    public name: string = 'HongGilDong';
    
    public obj: {id: number, address: string} = {
        id: 1,
        address: 'Seoul'
    }

    // public obj: any = {
    //     id: 1,
    //     address: 'Seoul'
    // };

    public ary: string[] = ['One', 'Two', 'Three'];

    
}
