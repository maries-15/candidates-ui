import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CandidatesService } from './candidates.service';

describe('CandidatesService', () => {
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
        const service: CandidatesService = TestBed.get(CandidatesService);
        expect(service).toBeTruthy();
    });
});
