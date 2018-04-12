import { Component } from '@angular/core';
import { ThreeDAO } from '../service/A03.three.dao.service';
import { ThreeVO } from '../service/A03.three.vo.service';

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>3.Jumsu Service</h3>
            </div>

            <div class="panel-body" *ngFor="let item of view">
                {{item}}
            </div>
        </div>
    `
})
export class A03Component {
    public students: Array<ThreeVO>;

    // display() 결과값 저장할 변수
    public view: Array<string> = [];

    constructor(private dao: ThreeDAO) { }

    ngOnInit() {
        let hong = new ThreeVO('Hong', 100, 80, 90);
        let nolBu = new ThreeVO('NolBu', 90, 80, 90);
        let hungBu = new ThreeVO('HungBu', 80, 80, 90);

        this.students = [hong, nolBu, hungBu];

        this.students.forEach((item, index) => {
            this.dao.getTotal(item);
            this.dao.getAvg(item);
            this.view.push(this.dao.display(item));
        });
    }
}