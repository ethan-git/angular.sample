import { Component, TemplateRef, ViewChild, ContentChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'a08One',
    template: `
        <h4>Child Component</h4>
        <button (click)="onAdd()">ONE</button>
        <br>
        <br>

        <!-- 하위 요소가 상위 요소의 컨텐츠를 표시 -->
        <ng-content></ng-content>
    `
})
export class A08One {
    // 자기 자신에 포함된 템플릿만
    // @ViewChild('temp') temp: TemplateRef<HTMLElement>;

    // 상위 요소에 포함되어 있는 template
    @ContentChild('temp') temp: TemplateRef<HTMLElement>;

    public message: string = 'Child Message';

    constructor(private vcr: ViewContainerRef) { }

    public onAdd(): void {
        let sendData: any = {
            name: 'NolBu',
            getInfo: function () {
                console.log('Child Component');
            }
        }
        this.vcr.createEmbeddedView(this.temp, sendData);
    }

    public onShow(): void {
        console.log('Child Component');
    }
}

@Component({
    selector: 'a08Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>8.TemplateRef</h3>
            </div>

            <div class="panel panel-body">
                A08 Component Content
            </div>

            <div class="panel panel-body">
                <a08One>
                    
                    <div>내부 Template</div>

                    <!-- 자식 요소에서 로드 구문을 기술한다. -->
                    <ng-template #temp let-name="name" let-fn="getInfo">
                        <h4>Child In Template</h4>
                        <div>
                            Message: {{message}}<br>
                            <button (click)="onShow()">Main Method</button>
                        </div>
                        <br>
                        <div>
                            <div>Name: {{name}}</div>
                            <button (click)="fn()">Inner Click</button>
                        </div>
                    </ng-template>
                </a08One>
            </div>

        </div>
    `
})
export class A08Component {
    public message: string = 'A08 Component Message';

    public onShow(): void {
        console.log('Main Component');
    }
}

