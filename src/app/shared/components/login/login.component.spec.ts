import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AuthenticationService } from '@services/authentication/authentication.service';
import { LoginComponent } from './login.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    const authenticationServiceMock = {
        login: jasmine.createSpy('login')
    };
    const ngbActiveModalMock = {
        close: jasmine.createSpy('close')
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                LoginComponent
            ],
            providers: [
                {
                    provide: AuthenticationService,
                    useValue: authenticationServiceMock
                },
                {
                    provide: NgbActiveModal,
                    useValue: ngbActiveModalMock
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
