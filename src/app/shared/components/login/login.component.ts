import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationService } from '@services/authentication/authentication.service';
import { LayoutService } from '@services/layout/layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    model = {
        user: '',
        password: ''
    };
    error = false;

    constructor(
        private authenticationService: AuthenticationService,
        private layoutService: LayoutService,
        private ngbActiveModal: NgbActiveModal
    ) { }

    ngOnInit() { }

    login(): void {
        if (this.model.user && this.model.password) {
            this.authenticationService.login(this.model)
                .subscribe((user) => {
                    if (user) {
                        this.layoutService.setSharedData({
                            isLoggedIn: true,
                            user
                        });
                        this.ngbActiveModal.close();
                    } else {
                        this.error = true;
                    }
                });
        }
    }
}
