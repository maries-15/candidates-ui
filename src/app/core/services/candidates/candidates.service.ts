import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { API_SERVICE } from '@services/constants/service.constants';

@Injectable({
    providedIn: 'root'
})
export class CandidatesService {
    constructor(
        private httpClient: HttpClient
    ) {}


    get(): Observable<{}> {
        return this.httpClient.get(`${API_SERVICE}candidate`)
            .pipe(
                map(response => {
                    return response;
                })
            );
    }

    update(data: {}): Observable<{}> {
        return this.httpClient.post(`${API_SERVICE}vote`, data)
            .pipe(
                map(response => {
                    return response;
                })
            );
    }
}
