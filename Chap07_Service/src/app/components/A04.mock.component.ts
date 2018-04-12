import { Component } from '@angular/core';
import { MockService } from '../service/A04.mock.service';


@Component({
    selector: 'a04Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>4.Jumsu Service</h3>
            </div>

            <div class="panel-body">
                
            </div>

            <div class="panel-body">
                Hong: {{this.data[0].name}} / {{this.data[0].kor}}<br>
                NolBu: {{this.data[1].name}} / {{this.data[1].kor}}<br>
            </div>
        </div>
    `,
    providers: [MockService]
})
export class A04Component {
    public data: Array<any>;
    constructor(private mock: MockService) { }

    ngOnInit() {
        this.getData();
    }

    public getData(): void {
        this.data = this.mock.getData();
    }
}