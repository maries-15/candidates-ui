import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CandidatesService {
    candidates = [
        {
            name: 'Kanye West',
            image: 'kayne.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            timeJob: '1 month ago',
            timeArea: 'Entertainment',
            votesUp: 64,
            votesDown: 36,
            voted: true
        }, {
            name: 'Mark Zuckemberg',
            image: 'mark.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            timeJob: '1 month ago',
            timeArea: 'Bussiness',
            votesUp: 30,
            votesDown: 40,
            voted: false
        }, {
            name: 'Cristina Fernández de Kirchener',
            image: 'cristina.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            timeJob: '1 month ago',
            timeArea: 'Politics',
            votesUp: 24,
            votesDown: 48,
            voted: false
        }, {
            name: 'Malala Yousafzai',
            image: 'malala.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            timeJob: '1 month ago',
            timeArea: 'Entertainment',
            votesUp: 30,
            votesDown: 40,
            voted: false
        }
    ];

    constructor(
        private httpClient: HttpClient
    ) {}


    get(): Array<{}> {
        return this.candidates;
    }
}
