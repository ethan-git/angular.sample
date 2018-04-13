import { Component } from '@angular/core';

@Component({
    selector: 'a08One',
    template: `
        <h4>Child Component</h4>
        <button>ONE</button>
        <br>
        <br>

        
    `
})
export class A08One {

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

                    <ng-template>
                        <h4>Child In Template</h4>
                        <div>
                            Message: <br>
                            <button>Main Method</button>
                        </div>
                       
                        <br>

                        <div>
                            <div>Name: </div>
                            <button>Inner Click</button>
                        </div>
                    </ng-template>
                </a08One>
            </div>

        </div>
    `
})
export class A08Component {
    public message: string = 'A08 Component Message';

}

