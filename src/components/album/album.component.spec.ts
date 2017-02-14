import { TestBed } from '@angular/core/testing';
import { AlbumComponent } from './album.component';
import { Album } from './../../common/entities';

describe('CardComponent Test', () => {
    let component: AlbumComponent;
    let album = new Album('France Trip ', 'Savoir, penser, rêver. Tout est là', ' Dt. Feb 11 2017');
    /*beforeEach(() => {
        component = new CardComponent('test');
        
        //TestBed.configureTestingModule({
          //  declarations: [CardComponent]
        //});

        //const fixture = TestBed.createComponent(CardComponent);
        //component = fixture.componentInstance;
        
    });

    it('should have the component defined', () => {
        expect(component).toBeDefined();
    });

    it('should initialize the header and footer of the card to blank string', () => {
        expect(component.title).toBe('test');
    });*/
});

