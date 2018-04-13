import { Component, Directive } from '@angular/core';

@Directive({
    selector: 'a09OneDir'
})
export class A09OneDirective {

}

@Component({
    selector: 'a09Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>9.TemplateRef</h3>
            </div>
            <div class="panel panel-body">
                <button>ADD</button>
            </div>
            
            <a09OneDir></a09OneDir>

            <ng-template>
                <h4>Template Content 1</h4>
            </ng-template>
        </div>
    `
})
export class A09Component {

}
