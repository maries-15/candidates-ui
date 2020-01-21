import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { VotesService } from './votes.service';

describe('VotesService', () => {
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
        const service: VotesService = TestBed.get(VotesService);
        expect(service).toBeTruthy();
    });
});
