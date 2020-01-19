import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CandidatesService {
    apiUrl = 'http://localhost:1337/candidate';

    constructor(
        private httpClient: HttpClient
    ) {}


    get(): Observable<{}> {
        return this.httpClient.get('http://localhost:1337/candidate')
            .pipe(
                map(response => {
                    return response;
                })
            );
    }

    update(id, data: {}): Observable<{}> {
        return this.httpClient.patch(`${this.apiUrl}/${id}`, data)
            .pipe(
                map(response => {
                    return response;
                })
            );
    }
}
