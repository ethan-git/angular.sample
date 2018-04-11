import { Component } from '@angular/core';

@Component({
    selector: 'a04Component',
    template:`
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Binding</h3>
            </div>
            
            <div class="panel-body">
                <!-- 228 page -->
                <h4>이벤트 바인딩</h4>
                <div [innerText]="result"></div><br><!-- 값이 없으면 undefined -->
                <div [innerHTML]="result"></div><br>
                <div></div><br>
                <button (click)="onChange('NolBu')">명령식</button>
                <button on-click="onChange('HungBu')">명령식</button>
            </div>

            <div class="panel-body">
                <h4>Class, Style Binding</h4>
                <div class="green">1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [class]="'green'">2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [class]="greenColor">2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [attr.class]="greenColor">3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [class.green]="true">4. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>

                <div>
                    <span [class.green]="checked">5. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</span>
                    <input type="checkbox" [(ngModel)]="checked">Check {{checked}}
                </div>

                <div [ngClass]="greenColor">6. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngClass]="'green bold'">7. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngClass]="[greenColor, 'bold']">8. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngClass]="{'green':true, 'bold':checked}">9. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>

            </div>

            <div class="panel-body">
                <div [style.color]="'orange'" [style.fontStyle]="'italic'">1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngStyle]="{color: 'orange', 'font-style':'italic'}">2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngStyle]="{color: 'orange', fontStyle:'italic'}">3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div bind-ngStyle="{color: 'orange', fontStyle:'italic'}">4. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
            </div>

        </div>
    `,
    styles: [`
        h3 {color: red }
        .green { color: green; }
        .bold { font-weight: bold; }
    `]
})
export class A04Component{
    public result: string;
    public name: string = 'HongGilDong';
    
    public greenColor: string = "green";
    public checked: boolean = true;

    public onChange(name: string): void{
        this.result = `<b>Hello</b> ${name}`;
    }
}
