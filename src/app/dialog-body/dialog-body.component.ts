import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogBodyComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
