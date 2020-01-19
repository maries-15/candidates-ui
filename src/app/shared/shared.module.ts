import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LayoutHeaderComponent } from '@components/layout-header/layout-header.component';
import { LayoutFooterComponent } from '@components/layout-footer/layout-footer.component';
import { FullPageImageComponent } from './components/full-page-image/full-page-image.component';
import { VotingCardComponent } from './components/voting-card/voting-card.component';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        FullPageImageComponent,
        LayoutFooterComponent,
        LayoutHeaderComponent,
        VotingCardComponent
    ],
    exports: [
        FullPageImageComponent,
        LayoutFooterComponent,
        LayoutHeaderComponent,
        VotingCardComponent
    ],
    providers: [

    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule { }
