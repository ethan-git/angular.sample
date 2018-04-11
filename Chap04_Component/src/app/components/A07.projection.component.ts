import { Component } from '@angular/core';

@Component({
    selector: 'a07One',
    template: `
        <div class="panel-body">
            <!-- 303 page -->
            <h3>A08 One Component</h3>

            <!-- 상위 요소에 컨텐츠를 이 영역에 표시한다 -->
            <ng-Content select=".header"></ng-Content>

            <hr>

            <ng-Content select=".footer"></ng-Content>
        </div>
    `
})
export class A07One {

}

@Component({
    selector: 'a07Component',
    template: `
        <div class="panel-body">
            <h3>A08 Component</h3>

        </div>
        <a07One>
            <div class="header">Header Content</div>
            <div class="footer">Footer Content</div>
        </a07One>
    `
})
export class A07Component {

}