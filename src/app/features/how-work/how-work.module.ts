import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowWorkRoutingModule } from './how-work-routing.module';
import { HowWorkComponent } from './how-work.component';


@NgModule({
    declarations: [HowWorkComponent],
    imports: [
        CommonModule,
        HowWorkRoutingModule
    ]
})
export class HowWorkModule { }
