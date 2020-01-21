import { Component, OnInit } from '@angular/core';

import { CandidatesService } from '@services/candidates/candidates.service';
import { LayoutService } from '@services/layout/layout.service';

@Component({
    selector: 'app-home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    candidates;
    shareData;


    constructor(
        private candidatesService: CandidatesService,
        private layoutService: LayoutService
    ) {}

    ngOnInit() {
        this.shareData = this.layoutService.getSharedData();
        this.candidatesService.get().subscribe((data) => {
            this.candidates = data;
        });
    }

    UpdateVotes(entryData) {
        const data = {
            candidateId: entryData.cardData.id,
            typeVote: entryData.typeVote,
            user: this.shareData['user'].user,
            id: this.shareData['user'].id
        };

        this.candidatesService.update(data)
            .subscribe(() => {
                const user = this.shareData.user;

                user.votes[entryData.cardData.id] = (user.votes[entryData.cardData.id] || 0) + 1;
                entryData.cardData[entryData.typeVote] = entryData.cardData[entryData.typeVote] + 1;
                this.layoutService.setSharedData({
                    user
                });
            });
    }
}
