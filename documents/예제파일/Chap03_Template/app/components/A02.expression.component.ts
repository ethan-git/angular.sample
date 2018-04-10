import { Component } from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Name: {{person.name}}</h3>
            </div>
            
            <div class="panel-body">
                <div>일반적인 연산: 1 + 2 = </div>
                <div>좋아하는 과일의 개수: </div>
                <div>과일의 개수 * 100 : </div>
                <div>Are you Hong? </div>
                <div>Are you Hong? </div>
                <div>과일 개수가 4개보다 많은가? </div>
            </div>
	    </div>
    `
})
export class A02Component{

}
