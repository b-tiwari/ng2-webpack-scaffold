import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PhotoAlbumApp, AlbumListComponent, AlbumComponent } from './components';
//, AlbumListComponent, AlbumComponent } from './components';

@NgModule({ 
    imports: [BrowserModule ],
    bootstrap: [ PhotoAlbumApp ],
    declarations: [ PhotoAlbumApp, AlbumListComponent, AlbumComponent ]
})
export class AppModule {}