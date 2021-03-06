import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog.component.html',
  })
  export class DialogOverviewExampleDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    okClick(from, to) {
      var data1 = {};
      data1["from"] = from.value;
      data1["to"] = to.value;
      this.dialogRef.close(data1);
    }
  
  }