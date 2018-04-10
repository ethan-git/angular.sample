import { Component }          from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div>
            <h3>Template Sample</h3>
        </div>
    `
})
export class A01Component{
    public name: string = 'HongGilDong';
    
    public obj: any = {
        id: 1,
        address: 'Seoul'
    };

    public ary: string[] = ['One', 'Two', 'Three'];

    
}
