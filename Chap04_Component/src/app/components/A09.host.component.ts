import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'a09One',
    template: `
        <div class="panel-body">
            <!-- 138 page -->
            <div class="first">First Child Component</div>
            <div class="blue">First Child Component</div>
        </div>
        <br>
        <br>
    `,
    styles: [`
        /* 현재 컴퍼넌트 전체 */
        :host {
            display: block;
            border: 1px solid blue;
        }
        :host(:hover){
            border: 2px solid red;
        }
        :host(:active){
            background-color: yellow;
        }
    `],
    encapsulation: ViewEncapsulation.Emulated
})
export class A09One {

}

@Component({
    selector: 'a09Component',
    template: `
        <div class="panel-heading">
            <h3 class="first">Host, Host deep, Host Context</h3>
        </div>

        <div class="panel-body">
            <span class="blue">This is A09 Component.</span>

            <br>

            <a09One></a09One>
        </div>
    `,
    styles: [`
        /* 현재 컴퍼넌트 전체 */
        :host {
            display: block;
            border: 1px solid orange;
        }
        :host(:hover){
            border: 2px solid green;
        }
        :host(:active){
            background-color: gray;
        }

        .first { color: red; }
        /* 하위 컴퍼넌트에도 사용할 수 있도록 허용 */
        :host /deep/ .blue { color: blue;}
    `],
    encapsulation: ViewEncapsulation.Emulated
})
export class A09Component {

}