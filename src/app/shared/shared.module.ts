import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutHeaderComponent } from '@components/layout-header/layout-header.component';
import { LayoutFooterComponent } from '@components/layout-footer/layout-footer.component';
import { FullPageImageComponent } from './components/full-page-image/full-page-image.component';
import { VotingCardComponent } from './components/voting-card/voting-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationModalComponent } from './components/authentication-modal/authentication-modal.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModalModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        AuthenticationModalComponent,
        FullPageImageComponent,
        LayoutFooterComponent,
        LayoutHeaderComponent,
        LoginComponent,
        RegisterComponent,
        VotingCardComponent
    ],
    exports: [
        AuthenticationModalComponent,
        FullPageImageComponent,
        LayoutFooterComponent,
        LayoutHeaderComponent,
        LoginComponent,
        RegisterComponent,
        VotingCardComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    entryComponents: [
        AuthenticationModalComponent
    ]
})
export class SharedModule { }
