import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CardData } from '@interfaces/cart-data.interface';

@Component({
    selector: 'app-voting-card',
    styleUrls: ['./voting-card.component.scss'],
    templateUrl: './voting-card.component.html'
})
export class VotingCardComponent implements OnInit {
    @Input() cardData: CardData;
    @Input() index: number;
    @Output() voteAction = new EventEmitter<{}>();

    submitted = false;
    votingForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.votingForm = this.formBuilder.group({
            vote: true
        });
    }

    voteNow() {
        this.submitted = true;
        this.voteAction.emit({
            cardData: this.cardData,
            vote: this.votingForm.value.vote
        });
    }

    voteAgain() {
        this.submitted = false;
    }

    getTotalVotes() {
        return this.cardData.votesDown + this.cardData.votesUp;
    }

    /**
     * get width for percentage votes depending on the entry
     * @returns width
     */
    getWidth(votes: number): string {
        return Math.round((votes * 100) / this.getTotalVotes()) + '%';
    }
}
