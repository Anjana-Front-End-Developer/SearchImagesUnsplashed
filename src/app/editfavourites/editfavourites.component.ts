import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ImageActionTypes } from '../store/actions';
import * as Cart from "../store/actions";

@Component({
  selector: 'app-editfavourites',
  templateUrl: './editfavourites.component.html',
  styleUrls: ['./editfavourites.component.scss']
})
export class EditFavouritesComponent implements OnInit {
  editList: any;
  constructor(private store: Store<any>, private dialogRef: MatDialogRef<EditFavouritesComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.editList = data;
  }
  updateList() {
    this.dialogRef.close(this.editList);
  }
  ngOnInit(): void {
  }

}

