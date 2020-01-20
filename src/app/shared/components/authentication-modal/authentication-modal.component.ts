import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-authentication-modal',
    templateUrl: './authentication-modal.component.html',
    styleUrls: ['./authentication-modal.component.scss']
})
export class AuthenticationModalComponent implements OnInit {
    selectedOption = 'login';

    constructor() { }

    ngOnInit() { }

    selectOption(option: string): void {
        this.selectedOption = option;
    }
}
