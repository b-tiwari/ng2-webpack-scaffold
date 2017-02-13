import { TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent Test', () => {
    let component: CardComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CardComponent]
        });

        const fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
    });

    it('should have the component defined', () => {
        expect(component).toBeDefined();
    });

    it('should initialize the header and footer of the card to blank string', () => {
        expect(component.testString).toBe('test');
    });
});

