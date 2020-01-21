import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

import { API_SERVICE } from '@services/constants/service.constants';
import { LayoutService } from '@services/layout/layout.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(
        private httpClient: HttpClient,
        private layoutService: LayoutService
    ) { }

    register(data) {
        return this.httpClient.post(`${API_SERVICE}user`, data)
            .pipe(
                catchError(error => {
                    return error;
                })
            );
    }

    login(data) {
        return this.httpClient.post(`${API_SERVICE}login`, data)
            .pipe(
                catchError(error => {
                    return error;
                })
            );
    }

    logOut(): void {
        this.layoutService.setSharedData({
            isLoggedIn: false,
            user: null
        });
    }
}
