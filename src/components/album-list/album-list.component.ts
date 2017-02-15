import { Component, OnInit } from '@angular/core';
import { Album } from './../../common/entities'

@Component({
    selector: 'album-list',
    template: require('./album-list.component.html')
})
export class AlbumListComponent implements OnInit {
    public albumList: Array<Album>;

    ngOnInit() {
        this.albumList = [ 
            new Album('France Trip ', 'Savoir, penser, rêver. Tout est là', ' Dt. Feb 11 2017'),
            new Album('Rome Trip ', 'Rome was not built in a day', ' Dt. Feb 11 2017')
        ]
    }

}