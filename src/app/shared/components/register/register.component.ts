import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationService } from '@services/authentication/authentication.service';
import { LayoutService } from '@services/layout/layout.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    model = {
        user: '',
        password: '',
        status: '',
        age: null
    };

    constructor(
        private authenticationService: AuthenticationService,
        private layoutService: LayoutService,
        private ngbActiveModal: NgbActiveModal
    ) { }

    ngOnInit() { }

    register(): void {
        if (
            this.model.user &&
            this.model.password &&
            this.model.status &&
            this.model.age &&
            this.model.age > 18
        ) {
            this.authenticationService.register(this.model)
                .subscribe((user) => {
                    this.layoutService.setSharedData({
                        isLoggedIn: true,
                        user
                    });
                    this.ngbActiveModal.close();
                });
        }
    }
}
