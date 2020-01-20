import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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
                map(response => {
                    return response;
                })
            );
    }

    login(data) {
        return this.httpClient.post(`${API_SERVICE}login`, data)
            .pipe(
                map(response => {
                    return response;
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
