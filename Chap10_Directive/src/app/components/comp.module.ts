
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A01Component } from './A01.component';
import { A01OneDirective, A01TwoDirective, A01ThreeDirective } from '../directive/A01.sample.directive';
import { A02Component, A02OneDirective } from './A02.input.component';
import { A03Component, A03OneDirective } from './A03.output.component';
import { A04Component, A04OneDirective } from './A04.hostListener.component';
import { A05Component, A05OneDirective } from './A05.renderer.component';
import { A06Component, A06OneDirective } from './A06.renderer.component';
import { A07Component } from './A07.templateRef.component';
import { A08Component, A08One } from './A08.templateRef.component';
import { A09Component, A09OneDirective } from './A09.importPosition.component';

@NgModule({
    declarations: [A01Component, A01OneDirective, A01TwoDirective, A01ThreeDirective,
        A02Component, A02OneDirective, A03Component, A03OneDirective,
        A04Component, A04OneDirective, A05Component, A05OneDirective, A06Component, A06OneDirective,
        A07Component, A08Component, A08One, A09Component, A09OneDirective
    ],
    imports: [CommonModule],
    exports: [A01Component, A02Component, A03Component, A04Component, A05Component, A06Component,
            A07Component, A08Component, A09Component
    ],
    providers: []
})
export class CompModule { }