import { Component, Directive, HostListener, Renderer, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[a04OneDir]',
    host: {
        // event를 @HostListener로 controller에서 정의 가능
    }
})
export class A04OneDirective {
    @Input('a04OneDir') color: string;

    public elem: HTMLElement;

    // DOM Access 객체를 주입받아 사용한다
    // 조작할 요소를 참조할 객체 => ElementRef
    constructor(private render: Renderer, private el: ElementRef) { }

    ngOnInit() {
        console.log(this.el);
        console.log(this.render);
        this.elem = this.el.nativeElement;
    }

    @HostListener('mouseenter') onMouseEnter(): void {
        // renderer를 이용하여 this.elem('div')를 조작
        this.render.setElementStyle(this.elem, 'color', this.color);
    }

    @HostListener('mouseleave') onMouseLeave(): void {
        // renderer를 이용하여 this.elem('div')를 조작
        this.render.setElementStyle(this.elem, 'color', '');
    }
}

@Component({
    selector: 'a04Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>4.Directive</h3>
            </div>

            <div class="panel panel-body">
                <div a04OneDir="orange">Directive Attribute</div>
                <div [a04OneDir]="'green'">Native Attribute</div>
            </div>
        </div>
    `
})
export class A04Component {

}
