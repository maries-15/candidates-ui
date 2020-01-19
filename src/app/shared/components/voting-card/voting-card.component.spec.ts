import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { VotingCardComponent } from './voting-card.component';

describe('VotingCardComponent', () => {
    let component: VotingCardComponent;
    let fixture: ComponentFixture<VotingCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule
            ],
            declarations: [
                VotingCardComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VotingCardComponent);
        component = fixture.componentInstance;
        component.cardData = {
            id: 1,
            name: 'Mark',
            image: 'url',
            description: 'Lorem ipsu',
            timeArea: 'Bussiness',
            timeJob: '1 month ago',
            votesUp: 7,
            votesDown: 3
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
