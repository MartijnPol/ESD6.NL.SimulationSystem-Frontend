import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-car-tracker-dialog',
  templateUrl: './new-car-tracker-dialog.component.html',
  styleUrls: ['./new-car-tracker-dialog.component.css']
})
export class NewCarTrackerDialogComponent {

  /**
   * Constructor, btw.. water is wet and the sun is hot.
   * @param {MatDialogRef<NewCarTrackerDialogComponent>} dialogRef
   * @param data
   */
  constructor(public dialogRef: MatDialogRef<NewCarTrackerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  /**
   * When the user clicks cancel in the dialog, this function will be called
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

}
