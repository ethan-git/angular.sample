import { Component, ViewContainerRef, ViewChild, TemplateRef, EmbeddedViewRef } from '@angular/core';

@Component({
    selector: 'a07Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>7.TemplateRef</h3>
            </div>
            <div class="panel panel-body">
                <button (click)="onLoadAll()">View</button>
                <button (click)="onRemoveAll()">Remove</button>
            </div>

            <div class="panel panel-body">
                <button (click)="onAdd(temp1)">Temp1</button>
                <button (click)="onAdd(temp2)">Temp2</button>
                <button (click)="onRemove()">Remove</button>
            </div>
            <!-- 로드될때 전달된 obj라는 변수를 받는다
                let-변수명=전달된변수명
            -->
            <ng-template #temp1 let-name="name" let-age="age">
                <div class="panel-heading">
                    <h3>Template One</h3>
                </div>
                <div class="panel-body">
                    Message: {{message}}<br>
                    Name: {{name}}<br>
                    Age: {{age}}
                </div>
            </ng-template>

            <ng-template #temp2>
                <div class="panel-heading">
                    <h3>Template Two</h3>
                </div>
                <div class="panel-body">
                    Message: {{message}}
                </div>
            </ng-template>
        </div>
    `
})
export class A07Component {
    public message: string = 'A07 Template Component';
    public view: boolean = true;

    @ViewChild('temp1') temp1: TemplateRef<HTMLElement>;
    @ViewChild('temp2') temp2: TemplateRef<HTMLElement>;

    // Template을 로드하기 위한 객체
    constructor(private vcr: ViewContainerRef) { }

    public onLoadAll(): void {
        // 1번만 로드되게 하기 위해서
        if (this.view) {
            this.vcr.createEmbeddedView(this.temp1);
            this.vcr.createEmbeddedView(this.temp2);

            this.view = false;
        }
    }

    public onRemoveAll(): void {
        this.vcr.clear();

        // 다 지우고 난 후에는 다시 로드되게 하기 위함
        this.view = true;
    }

    // 1개씩만 올리기. Template을 제어할 객체
    private tempView: EmbeddedViewRef<HTMLElement>;

    public onAdd(temp: TemplateRef<HTMLElement>): void {
        // 가공한 데이터를 Template에게 전달
        let obj: any = {
            name: 'HongGilDong',
            age: 20
        }

        // 객체가 만들어져 있다면 지우고
        if (this.tempView) this.tempView.destroy();

        // 지정한 객체에 새롭게 로드
        this.tempView = this.vcr.createEmbeddedView(temp, obj);
    }

    public onRemove(): void {
        // 객체가 만들어져 있는 경우만 삭제
        if (this.tempView) this.tempView.destroy();
    }
}
