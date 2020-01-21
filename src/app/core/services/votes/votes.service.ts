import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { API_SERVICE } from '@services/constants/service.constants';

@Injectable({
    providedIn: 'root'
})
export class VotesService {

    constructor(
        private httpClient: HttpClient
    ) {}

    getVotesPerUser(data: Array<string>): Observable<{}> {
        return this.httpClient.post(`${API_SERVICE}votes-per-user`, data);
    }
}
