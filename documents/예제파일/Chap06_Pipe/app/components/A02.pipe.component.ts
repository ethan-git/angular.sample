import { Component }              from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Pipe Percent / Decimal / Slice</h3>
            </div>

            <div class="panel-body">
                <h4>Percent</h4>
                <div>
                    
                </div>
                <br>

                <h4>Decimal Pipe</h4>
                <div>
                    
                </div>
                <br>

                <h4>String slice</h4>
                <div>
                    
                </div>
            </div>
        </div>
    `
})
export class A02Component{
    public num: number = 1.23;
    public str: string = '동해물과 백두산이 마르고 닳도록';

   
}