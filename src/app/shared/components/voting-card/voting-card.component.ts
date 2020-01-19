import { Component, OnInit, Input } from '@angular/core';
import { CardData } from '@interfaces/cart-data.interface';

@Component({
    selector: 'app-voting-card',
    templateUrl: './voting-card.component.html',
    styleUrls: ['./voting-card.component.scss']
})
export class VotingCardComponent implements OnInit {
    @Input() cardData: CardData;

    constructor() { }

    ngOnInit() {
    }

    /**
     * get width for percentage votes depending on the entry
     * @returns width
     */
    getWidth(votes: number): string {
        return Math.round((votes * 100) / (this.cardData.votesDown + this.cardData.votesUp)) + '%';
    }
}
