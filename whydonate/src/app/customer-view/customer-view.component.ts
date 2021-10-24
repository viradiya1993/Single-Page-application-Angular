import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  customerDetails: any
  constructor( private dialogRef: MatDialogRef<CustomerViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {  this.customerDetails = data.customerData}

  ngOnInit(): void {
    console.log(this.customerDetails);
    
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
