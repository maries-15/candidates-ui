import { Component, OnInit } from '@angular/core';

import { LayoutService } from '@app/core/services/layout/layout.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    sharedData: {};

    constructor(
        private layoutService: LayoutService
    ) {}

    ngOnInit(): void {
        this.sharedData = this.layoutService.getSharedData();
    }
}
