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

        spyOn(component.voteAction, 'emit').and.callThrough();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should vote with default selected value', () => {
        component.voteNow();

        expect(component.voteAction.emit).toHaveBeenCalledWith({
            cardData: component.cardData,
            typeVote: 'votesUp'
        });
    });

    it('should vote with new selected value', () => {
        component.votingForm.controls.vote.setValue(false);
        component.voteNow();

        expect(component.voteAction.emit).toHaveBeenCalledWith({
            cardData: component.cardData,
            typeVote: 'votesDown'
        });
    });

    it('should get total votes from given cardData', () => {
        expect(component.getTotalVotes()).toEqual(10);
    });

    it('should get percentage of votes depending on entry data', () => {
        expect(component.getWidth(3)).toEqual('30%');
        expect(component.getWidth(5)).toEqual('50%');
        expect(component.getWidth(1)).toEqual('10%');
    });
});
