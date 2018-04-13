import { Component, Directive, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

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

            <a09OneDir #one></a09OneDir>

            <div class="panel panel-body">
                <button (click)="onAdd()">ADD</button>
            </div>

            <ng-template #temp>
                <h4>Template Content 1</h4>
            </ng-template>
        </div>
    `
})
export class A09Component {

    @ViewChild('temp') temp: TemplateRef<HTMLElement>;
    @ViewChild('one', { read: ViewContainerRef }) vcr: ViewContainerRef;

    public onAdd(): void {
        this.vcr.createEmbeddedView(this.temp);
    }
}
