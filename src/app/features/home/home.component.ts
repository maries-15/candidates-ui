import { Component, OnInit } from '@angular/core';

import { CandidatesService } from '@services/candidates/candidates.service';

@Component({
    selector: 'app-home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    candidates;


    constructor(
        private candidatesService: CandidatesService
    ) {}

    ngOnInit() {
        this.candidatesService.get().subscribe((data) => {
            this.candidates = data;
        });
    }

    UpdateVotes(entryData) {
        const data = {};

        if (entryData.vote) {
            data['votesUp'] = entryData.cardData.votesUp + 1;
        } else {
            data['votesDown'] = entryData.cardData.votesDown + 1;
        }

        this.candidatesService.update(entryData.cardData.id , data)
            .subscribe((updatedData) => {
                entryData.cardData.votesUp = updatedData['votesUp'];
                entryData.cardData.votesDown = updatedData['votesDown'];
            });
    }
}
