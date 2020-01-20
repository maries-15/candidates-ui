import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationModalComponent } from '@components/authentication-modal/authentication-modal.component';
import { AuthenticationService } from '@services/authentication/authentication.service';

@Component({
    selector: 'app-layout-header',
    templateUrl: './layout-header.component.html',
    styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {
    @Input() isLoggedIn = false;
    @Input() username: string;

    constructor(
        private authenticationService: AuthenticationService,
        private ngbModal: NgbModal
    ) {}

    ngOnInit() { }

    openLoginModal(): void {
        this.ngbModal.open(AuthenticationModalComponent);
    }

    logOut(): void {
        this.authenticationService.logOut();
    }
}
