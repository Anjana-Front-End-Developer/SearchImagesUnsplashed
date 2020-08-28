import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ImagesService } from './services/images.service';
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from '../app/material.module';
import { storeEffects } from './store/effects';
import { StoreModule } from "@ngrx/store";
import { reducer } from './store/reducer';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';

import { SearchImagesComponent } from './search-images/search-images.component';
import { FavouriteImagesComponent } from './favourite-images/favourite-images.component';
import { EditFavouritesComponent } from './editFavourites/editfavourites.component';
import { AddFavouriteComponent } from './addFavourite/addFavourite.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/searchimages',
    pathMatch: 'full'
  },
  {
    path: 'searchimages',
    component: SearchImagesComponent
  },
  {
    path: 'favoritesimages',
    component: FavouriteImagesComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FavouriteImagesComponent,
    SearchImagesComponent,
    AddFavouriteComponent,
    EditFavouritesComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ Cart: reducer }),
    EffectsModule.forRoot([storeEffects]),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents: [AddFavouriteComponent, EditFavouritesComponent],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

