import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-route-dialog',
  templateUrl: './route-dialog.component.html',
  styleUrls: ['./route-dialog.component.css']
})
export class RouteDialogComponent {

  /**
   * Constructor, btw.. water is wet and the sun is hot.
   * @param {MatDialogRef<RouteDialogComponent>} dialogRef
   * @param data
   */
  constructor(public dialogRef: MatDialogRef<RouteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  /**
   * When the user clicks cancel in the dialog, this function will be called
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

}
