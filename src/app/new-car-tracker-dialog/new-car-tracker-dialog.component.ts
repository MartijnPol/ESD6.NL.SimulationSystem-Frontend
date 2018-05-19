import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-car-tracker-dialog',
  templateUrl: './new-car-tracker-dialog.component.html',
  styleUrls: ['./new-car-tracker-dialog.component.css']
})
export class NewCarTrackerDialogComponent {

  constructor(public dialogRef: MatDialogRef<NewCarTrackerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
