import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AuthenticationService', () => {
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });

        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        const service: AuthenticationService = TestBed.get(AuthenticationService);
        expect(service).toBeTruthy();
    });
});
