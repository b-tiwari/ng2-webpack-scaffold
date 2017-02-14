import { Component, OnInit, Input } from '@angular/core';
import { Album } from './../../common/entities'

@Component({
    selector: 'album',
    template: './album.component.ts'
})
export class AlbumComponent{
        public title: string;
        public body:string;
        public footer: string;
         @Input() album: Album;
        constructor(title: string = '', body: string, footer: string){
            this.title = title;
        }
}