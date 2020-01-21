import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationService } from '@services/authentication/authentication.service';
import { LayoutHeaderComponent } from './layout-header.component';

describe('LayoutHeaderComponent', () => {
    let component: LayoutHeaderComponent;
    let fixture: ComponentFixture<LayoutHeaderComponent>;
    const authenticationServiceMock = {
        login: jasmine.createSpy('login')
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NgbAccordionModule
            ],
            declarations: [
                LayoutHeaderComponent
            ],
            providers: [
                {
                    provide: AuthenticationService,
                    useValue: authenticationServiceMock
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
