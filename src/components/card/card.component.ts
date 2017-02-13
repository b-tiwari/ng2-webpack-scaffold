import { Component, OnInit } from '@angular/core';
import { ICard } from './../../common';

@Component({
    selector: 'card',
    template: ''
})
export class CardComponent{
        //public Card: ICard;
        public testString: string;

        constructor(){
            console.log('in component constructor');
            this.testString = 'test';
            //this.Card.header = header;
            //this.Card.footer = footer;
        }


        /*ngOnInit() {
           console.log('in ngOnInit'); 
        }*/
}