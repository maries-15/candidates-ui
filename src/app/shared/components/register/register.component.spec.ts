import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AuthenticationService } from '@services/authentication/authentication.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    const authenticationServiceMock = {
        register: jasmine.createSpy('register')
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
                RegisterComponent
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
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
