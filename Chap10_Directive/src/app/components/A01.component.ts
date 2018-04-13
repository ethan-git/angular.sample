import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>1.Directive</h3>
            </div>

            <div class="panel panel-body">
                <!-- View에 참여하므로 module에서 정의해야 함.
                    지시자 이름에 []가 없으면 태그로 사용
                    [dirName] 형태는 속성으로 사용
                -->
                <a01OneDir>One</a01OneDir>
                <br>
                <span a01OneDir>One</span>
            </div>

            <div class="panel panel-body">
                <!-- []이 붙으면 태그로 사용 불가
                <a01TwoDir>Two Tag</a01TwoDir>
                 -->    
                <div a01TwoDir>TWO Attr</div>
                <!-- 속성 바인딩은 값 전달 목적(바인딩 목적)
                <div [a01TwoDir]>TWO Attr</div>
                
                받는 쪽에서 반드시 @Input()이 기술되어야 한다
                <div [a01TwoDir]="'abc'">TWO Attr</div>
                -->

                <!-- [] 안 싸여 있으면 받는쪽에서 받아도 그만, 안 받아도 그만
                    따라서 에러는 아님
                -->
                <div a01TwoDir="'abc'">TWO Attr</div>

                <br>

                <div a01ThreeDir>Three Attr</div>
                <div three>Three Attr</div>
            </div>
        </div>
    `
})
export class A01Component {

}


