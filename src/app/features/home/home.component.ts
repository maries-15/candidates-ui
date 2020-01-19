import { Component, OnInit } from '@angular/core';

import { CandidatesService } from '@services/candidates/candidates.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    candidates: Array<{}>;


    constructor(
        private candidatesService: CandidatesService
    ) { }

    ngOnInit() {
        this.candidates = this.candidatesService.get();
    }

}
