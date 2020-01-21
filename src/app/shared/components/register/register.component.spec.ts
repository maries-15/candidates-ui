import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';

import { AuthenticationService } from '@services/authentication/authentication.service';
import { LayoutService } from '@services/layout/layout.service';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    const user = {
        user: 'James',
        password: '123456',
        status: 'Single',
        age: 18
    };
    const authenticationServiceMock = {
        register: jasmine.createSpy('register').and.returnValue(of(user))
    };
    const ngbActiveModalMock = {
        close: jasmine.createSpy('close')
    };
    const layoutServiceMock = {
        setSharedData: jasmine.createSpy('setSharedData')
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
                },
                {
                    provide: LayoutService,
                    useValue: layoutServiceMock
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

    it('should not call register service when data is not complete', () => {
        authenticationServiceMock.register.calls.reset();
        component.register();
        expect(authenticationServiceMock.register).not.toHaveBeenCalled();
    });

    it('should call register service when data is complete and valid', () => {
        component.model = user;
        component.register();
        expect(authenticationServiceMock.register).toHaveBeenCalledWith(user);
        expect(layoutServiceMock.setSharedData).toHaveBeenCalledWith({
            isLoggedIn: true,
            user
        });
        expect(ngbActiveModalMock.close).toHaveBeenCalled();
    });
});
