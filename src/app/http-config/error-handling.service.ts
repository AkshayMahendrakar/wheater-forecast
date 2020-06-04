import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';

@Injectable()
export class ErrorHandlingService {

  public isDialogOpen = false;
  constructor(public dialog: MatDialog) { }
  openDialog(res): any {
      if (this.isDialogOpen) {
          return false;
      }
      this.isDialogOpen = true;
      const dialogRef = this.dialog.open(ErrorDialogComponent, {
          width: '50%',
          height: '30%'
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.isDialogOpen = false;
       });
  }
}
