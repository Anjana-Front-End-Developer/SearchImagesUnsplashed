import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from "@ngrx/store";
import * as Cart from "../store/actions";
import { AddFavouriteComponent } from '../addFavourite/addFavourite.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.scss']
})
export class SearchImagesComponent implements OnInit {

  response: any;
  lists: any;
  queryString: any;
  getInfo: any;
  storeValues: any;
  disableBtn: boolean = false;

  constructor(private _snackBar: MatSnackBar, private service: ImagesService, private store: Store<{ items: any; Cart: [] }>, private dialog: MatDialog) { }

  ngOnInit() {
    this.getImages();
  }
  getImages() {
    this.store.select('Cart').subscribe(data => {
      this.storeValues = data;
      if (data['item'].length != 0) {
        this.getInfo = data['item'][0].queryString;
        this.response = data['item'][0].items;
      }
    })
  }
  searchImages(query) {
    this.store.dispatch(new Cart.LoadItems({ queryString: query }));
    this.getImages();
  }
  
  addToFavourites(product) {
    const dialogRef = this.dialog.open(AddFavouriteComponent, {
      width: '300px',
      height: '300px',
      data: product
    });
    dialogRef.afterClosed().subscribe(result => {
      this._snackBar.openFromComponent(snackBarComponent, {
        duration: 2000,
      });
    });
  }
openauthorPage(image) {
    if (image.user.portfolio_url != null) {
      window.open(image.user.portfolio_url);
    } else {
      alert("author page deatils not available")
    }
  }
  
}


@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="snaBar">
                List Added Successfully!
              </span>`,
  styles: [`
    .snaBar {
      color: #b3c2de;
    }
  `],
})
export class snackBarComponent { }
