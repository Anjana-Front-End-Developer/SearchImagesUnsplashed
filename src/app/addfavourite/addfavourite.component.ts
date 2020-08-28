import { Component, OnInit, Inject } from '@angular/core';
import { ImagesService } from '../services/images.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from "@ngrx/store";
import * as Cart from "../store/actions";

@Component({
  selector: 'app-addfavourite',
  templateUrl: './addfavourite.component.html',
  styleUrls: ['./addfavourite.component.scss']
})
export class AddFavouriteComponent implements OnInit {
  listName: any = "";
  data: any;
  listDesc: any = "";
  showInput: boolean;
  existingList: any;
  constructor(private service: ImagesService, private store: Store<any>, public snackBar: MatSnackBar, private dialogRef: MatDialogRef<AddFavouriteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
  }
  ngOnInit(): void {
    this.store.select('cart').subscribe(data => {
      console.log(data.cart);
      this.existingList = [...new Set(data['cart'].map(x => {
        return x.name;
      }))]
      if (this.existingList.length != 0)
        this.showInput = false;
    })
  }
  addToFavourities(listName, listDesc) {
    this.store.dispatch(new Cart.AddProduct({ name: listName, desc: this.listDesc, value: this.data }))
  }
  createNewList() {
    this.showInput = true
  }

}

