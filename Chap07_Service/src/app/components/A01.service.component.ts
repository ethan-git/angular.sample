import { Component } from '@angular/core';
import { GreetService } from '../service/A01.greet.service';
import { HelloService } from '../service/A01.hello.service';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Service</h3>
            </div>

            <div class="panel-body">
                Greet Service: {{name}}<br>
                Hello Service: {{hi}}
            </div>
        </div>
    `
})
export class A01Component {
    public name: string;
    public hi: string;

    // @Injectable()이 없는 일반 서비스
    public hello: HelloService;
    constructor(private greet: GreetService) { 
        this.hello = new HelloService();
    }

    ngOnInit() {
        this.name = this.greet.getName('Hong');
        this.hi = this.hello.getName('NolBu');
    }
}
