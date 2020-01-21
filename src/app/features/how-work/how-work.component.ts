import { Component, OnInit } from '@angular/core';

import { LayoutService } from '@services/layout/layout.service';
import { VotesService } from '@services/votes/votes.service';

@Component({
    selector: 'app-how-work',
    templateUrl: './how-work.component.html',
    styleUrls: ['./how-work.component.scss']
})
export class HowWorkComponent implements OnInit {
    candidates;
    sharedData;

    constructor(
        private votesService: VotesService,
        private layoutService: LayoutService
    ) { }

    ngOnInit() {
        this.sharedData = this.layoutService.getSharedData();
        this.getVotesPerUser();
    }

    getVotesPerUser(): void {
        if (this.sharedData.user) {
            const candidatesId = Object.keys(this.sharedData.user.votes);

            this.votesService.getVotesPerUser(candidatesId)
                .subscribe((response) => {
                    this.candidates = response;
                });
        }
    }
}
