import { Component, OnInit, Input } from '@angular/core';
import { Album } from './../../common/entities'

@Component({
    selector: 'album',
    template: require('./album.component.html')
})
export class AlbumComponent{
        public title: string;
        public body:string;
        public footer: string;
         @Input() album: Album;
        constructor(){
            this.title = '';
        }
}